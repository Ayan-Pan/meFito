var express = require('express');
var router = express.Router();
let commonData = require('./common');
const signUp = require('../models/signedUp.model');
const register = require('../models/registered.model');



/* GET home page. */
router.get('/', function(req, res, next) {
    let data = {
        title: 'meFito - Registration',
        bgImg: "images/gym4.jpg",
        bodyTitle: 'User Registration',

        courseName: ['Select any Course', ['Gym', 'Aerobics', 'Yoga']],

        shift: ['Select a shift', ['Morning', 'Day', 'Evening']],

        package: ['Select any Package', ['3 Months', '6 Months', '1 year']]
    }

    commonData.getPageData().then((resp) => {
        let pageData = Object.assign(resp, data);
        if (pageData.signedUp == true && pageData.Registered == false)
            res.render('register', pageData);
        else if (pageData.Registered == true)
            res.send("<h1>You have alread registered!</h1>")
        else if (pageData.signedUp == false)
            res.send("<h1>Sign In First!</h1>")
    }, (err) => {
        console.log(err);
    })
});

router.post('/', (req, res, next) => {

    commonData.getPageData().then((resp) => {
        var d = new Date();
        d.setHours(0, 0, 0, 0);
        d.setDate(d.getDate() + 1);
        // var year = d.getFullYear();
        // var month = d.getMonth() + 1;
        // var date = d.getDate();
        // var currentDate = `${year}-0${month}-0${date}`;

        const registered = new register({
            name: resp.signedName,
            email: resp.signedAddress,
            password: resp.signedPassword,
            course: req.body.course,
            shift: req.body.shift,
            package: req.body.package,
            dateOfJoing: d
        });
        registered.save();

        signUp.findOne({ email: resp.signedAddress, password: resp.signedPassword }, (err, docs) => {
            if (err) return console.error(err);
            else {
                docs.hasRegistered = true;
                docs.save();
                res.redirect('/registration/success')
            };
        });
    }, (err) => {
        console.log(err);
    })



})

router.get('/success', (req, res) => {
    data = {
        title: "meFito - Regisration - Success",
        bgImg: "images/gym4.jpg",
        message: "You Have Successfully Registered!"
    }
    commonData.getPageData().then((resp) => {
        let pageData = Object.assign(resp, data);
        if (pageData.signedUp == true && pageData.Registered == true) {
            res.render('success', pageData);
        } else {
            res.send('<h1>Error 500!</h1>');
        }
    }, (err) => {
        console.log(err);
    })
});


module.exports = router;