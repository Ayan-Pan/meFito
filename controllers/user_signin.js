var express = require('express');
const mongoose = require('mongoose');
let commonData = require('./common');
const signUp = require('../models/signedUp.model');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let data = {
        title: 'meFito - User Sign In',
        bgImg: "images/gym4.jpg",
        bodyTitle: 'User Sign In',
        formTexts: [`Email address`, `We'll never share your email with anyone else.`,
            `Password`, `Submit`, `Don't have an account?`, `Create One`
        ],
    }

    commonData.getPageData().then((resp) => {
        console.log(resp);
        let pageData = Object.assign(resp, data);
        if (pageData.signedUp == false)
            res.render('user_signin', pageData);
        else res.send("<h1>You are already Signed In!</h1>")
    }, (err) => {
        console.log(err);
    })
});

router.post('/', (req, res) => {
    var eAddr = req.body.email;
    var pass = req.body.password;

    // console.log(signedUp.isActive);


    signUp.findOne({ email: eAddr, password: pass }, (err, docs) => {
        if (err) {
            console.error(err);
            return err;
        } else {
            if (docs == '') {
                console.log("Invalid Data!");
                res.redirect("/usersignin");
            } else {
                // console.log(docs);
                docs.isActive = true;
                docs.save();
                commonData.setPageData(eAddr, pass);
                // console.log(docs);
                res.redirect('/');
            }
        };
    });
});

module.exports = router;