var express = require('express');
var router = express.Router();
let commonData = require('./common');
const signUp = require('../models/signedUp.model');




router.get('/', function (req, res, next) {
    data = {
        title: 'meFito - Admin - Sign Up Details',
        space: ' ',
    };

    commonData.getSignUpList().then((resp) => {
        data.userList = resp;
    }, (err) => {
        console.log(err);
    })

    commonData.getAdminData().then((resp) => {
        let pageData = Object.assign(resp, data);
        res.render('admin_signup_details', pageData);
    }, (err) => {
        console.log(err);
    })
});

module.exports = router;