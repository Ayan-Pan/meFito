var express = require('express');
var router = express.Router();
let commonData = require('./common');



router.get('/', function(req, res, next) {
    data = {
        title: 'meFito - Admin',
    };

    commonData.getSignUpDateList().then((resp) => {
        data.signDetails = resp;
        // console.log(resp);
    }, (err) => {
        console.log(err);
    });

    commonData.getRegistrationDateList().then((resp) => {
        data.regDetails = resp;
        // console.log(resp);
    }, (err) => {
        console.log(err);
    });

    commonData.getcourseList().then((resp) => {
        data.courseDetails = resp;
        // console.log(resp);
    }, (err) => {
        console.log(err);
    });


    commonData.getAdminData().then((resp) => {
        let pageData = Object.assign(resp, data);
        console.log(pageData.details);
        res.render('admin', pageData);
    }, (err) => {
        console.log(err);
    })
});

module.exports = router;