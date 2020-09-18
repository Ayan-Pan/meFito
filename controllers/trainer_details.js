var express = require('express');
var router = express.Router();
let commonData = require('./common');
const trainerDetail = require('../models/trainer.model');




router.get('/', function (req, res, next) {
    data = {
        title: 'meFito - Trainer Details',
        space: ' ',
        bodyText: ['Add Trainer', 'Trainer Details'],
        formTexts: [`First Name`, `Middle Name`, `Last Name`, `Email`, `Phone No.`, `Date of Birth`,
            `Gender`, `Male`, `Female`, `Others`, `Address`, `Trainer Of`, `Gym`, `Aerobics`,
            `Yoga`, `Shift`, `Morning`, `Day`, `Evening`, `Create`
        ],
    };

    commonData.getTrainerList().then((resp) => {
        data.trainerList = resp;
    }, (err) => {
        console.log(err);
    })

    commonData.getAdminData().then((resp) => {
        let pageData = Object.assign(resp, data);
        res.render('trainer_details', pageData);
    }, (err) => {
        console.log(err);
    })
});

router.post('/', async (req, res, next) => {
    const trainer = new trainerDetail({
        firstName: req.body.fName,
        middleName: req.body.mName,
        lastName: req.body.lName,
        email: req.body.email,
        phone: req.body.phNo,
        dob: req.body.dob,
        gender: req.body.gender,
        address: req.body.address,
        trainerof: req.body.trainerof,
        shift: req.body.shift,
        active: true
    });

    if (trainer.firstName == '' || trainer.lastName == '' || trainer.email == '' || trainer.phone == '' || trainer.dob == null ||
        trainer.gender == '' || trainer.address == '' || trainer.trainerof == '' || trainer.shift == '' || (new Date().getFullYear() - new Date(req.body.dob).getFullYear()) <= 15) {
        data = {
            title: 'meFito - Trainer Details',
            space: ' ',
            bodyText: ['Invalid Details Given!', 'Trainer Details'],
            formTexts: [`First Name`, `Middle Name`, `Last Name`, `Email`, `Phone No.`, `Date of Birth`,
                `Gender`, `Male`, `Female`, `Others`, `Address`, `Trainer Of`, `Gym`, `Aerobics`,
                `Yoga`, `Shift`, `Morning`, `Day`, `Evening`, `Create`
            ],
        };

        commonData.getTrainerList().then((resp) => {
            data.trainerList = resp;
        }, (err) => {
            console.log(err);
        })

        commonData.getAdminData().then((resp) => {
            let pageData = Object.assign(resp, data);
            res.render('trainer_details', pageData);
        }, (err) => {
            console.log(err);
        })
    } else {
        await trainer.save();
        res.redirect('/trainerDetails');
    }
});



module.exports = router;