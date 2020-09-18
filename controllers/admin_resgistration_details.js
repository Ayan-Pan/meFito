var express = require('express');
var router = express.Router();
let commonData = require('./common');
const register = require('../models/registered.model');


router.get('/', function (req, res, next) {
    data = {
        title: 'meFito - Admin - Registration Details'
    };

    commonData.getRegistrationList().then((resp) => {
        data.userList = resp;
    }, (err) => {
        console.log(err);
    })

    commonData.getAdminData().then((resp) => {
        let pageData = Object.assign(resp, data);
        res.render('admin_registration_details', pageData);
    }, (err) => {
        console.log(err);
    })
});

module.exports = router;