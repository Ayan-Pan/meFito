var express = require('express');
var router = express.Router();
let commonData = require('./common');
const signUp = require('../models/signedUp.model');


router.get('/', function (req, res, next) {
    let data = {
        title: 'meFito - User Update',
        bgImg: "images/gym4.jpg",
        bodyTitle: 'Update Account',
        formTexts: [`First Name`, `Middle Name`, `Last Name`, `Email`, `Phone No.`, `Password`, 'Re-enter Password',
            `Date of Birth`, `Gender`, `Male`, `Female`, `Others`, `Address`, `Update`
        ],
    };

    commonData.getPageData().then((resp) => {
        let pageData = Object.assign(resp, data);
        res.render('update_account', pageData);
    }, (err) => {
        console.log(err);
    })
});

router.post('/', function (req, res, next) {
    commonData.getPageData().then((resp) => {
        signUp.findOne({ email: resp.signedAddress, password: resp.signedPassword }, (err, docs) => {
            if (err) throw err;

            if (req.body.fName != '')
                docs.firstName = req.body.fName;
            if (req.body.lName != '')
                docs.lastName = req.body.lName;
            if (req.body.email != '')
                docs.email = req.body.email;
            if (req.body.phNo != '')
                docs.phone = req.body.phNo;
            if (req.body.password != '' && req.body.password == req.body.re_pass)
                docs.password = req.body.password;
            if (req.body.dob != '')
                docs.dob = req.body.dob;
            if (req.body.address != '')
                docs.address = req.body.address;

            docs.middleName = req.body.mName;
            docs.gender = req.body.gender;

            docs.save();
            commonData.setPageData(docs.email, docs.password);
            res.redirect('/');

        });
    }, (err) => {
        console.log(err);
    })
});

module.exports = router;