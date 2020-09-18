var express = require('express');
var router = express.Router();
let commonData = require('./common');
const url = require('url');
const trainerDetail = require('../models/trainer.model');
let query = {};

router.get('/', (req, res, next) => {
    const queryObject = url.parse(req.url, true).query;
    // console.log(queryObject);

    query.id = queryObject.trainer_id;
    // console.log(query.id);

    data = {
        title: 'meFito  - Trainer Details Update',
        space: ' ',
        bodyText: ['Current Delatils', 'Update Details'],
        formTexts: [`First Name`, `Middle Name`, `Last Name`, `Email`, `Phone No.`, `Date of Birth`,
            `Gender`, `Male`, `Female`, `Others`, `Address`, `Trainer Of`, `Gym`, `Aerobics`,
            `Yoga`, `Shift`, `Morning`, `Day`, `Evening`, `Update`
        ],

    }

    trainerDetail.findOne({ _id: queryObject.trainer_id }, (err, docs) => {
        if (err) throw err;
        data.trainerDetails = docs;
        // console.log(docs);
    })

    commonData.getAdminData().then((resp) => {
        let pageData = Object.assign(resp, data);
        // console.log(pageData.trainerDetails);
        res.render('trainer_update', pageData);
    }, (err) => {
        console.log(err);
    })
})

router.post('/', (req, res, next) => {
    trainerDetail.findOne({ _id: query.id }, (err, docs) => {
        if (err) throw err;

        if (req.body.fName != '')
            docs.firstName = req.body.fName;
        if (req.body.mName != '')
            docs.middleName = req.body.mName;
        if (req.body.lName != '')
            docs.lastName = req.body.lName;
        if (req.body.email != '')
            docs.email = req.body.email;
        if (req.body.phNo != '')
            docs.phone = req.body.phNo;
        if (req.body.dob != '' && (new Date().getFullYear() - new Date(req.body.dob).getFullYear()) >= 15)
            docs.dob = req.body.dob;
        if (req.body.address != '')
            docs.address = req.body.address;

        docs.gender = req.body.gender;
        docs.trainerof = req.body.trainerof;
        docs.shift = req.body.shift;

        console.log(new Date().getFullYear() - new Date(req.body.dob).getFullYear());

        docs.save();

        res.redirect(`/trainerupdate?trainer_id=${query.id}`);
    })
})

module.exports = router;