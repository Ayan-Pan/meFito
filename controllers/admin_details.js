var express = require('express');
var router = express.Router();
let commonData = require('./common');
const adminDetail = require('../models/admin.model');




router.get('/', function (req, res, next) {
    data = {
        title: 'meFito - Admin Details',
        space: ' ',
        bodyText: ['Admin Delatils', 'Update Admin Details'],
        formTexts: [`First Name`, `Middle Name`, `Last Name`, `Email`, `Phone No.`, `Password`,
            'Re-enter Password', `Date of Birth`, `Gender`, `Male`, `Female`, `Others`, `Address`, `Update`
        ],
    };

    commonData.getAdminData().then((resp) => {
        let pageData = Object.assign(resp, data);
        res.render('admin_details', pageData);
    }, (err) => {
        console.log(err);
    })
});

router.post('/', function (req, res, next) {
    adminDetail.findOne({ _id: "5f51c45e7688491e000bb68c" }, (err, docs) => {
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

        console.log(docs);
        console.log(req.body);

        docs.save();
        res.redirect('/admindetails');

    });

});

module.exports = router;