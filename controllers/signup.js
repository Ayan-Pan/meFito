var express = require('express');
const mongoose = require('mongoose');
let commonData = require('./common');
const signUp = require('../models/signedUp.model');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let data = {
        title: 'meFito - Sign Up',
        bgImg: "images/gym4.jpg",
        bodyTitle: 'Sign Up',
        formTexts: [`First Name`, `Middle Name`, `Last Name`, `Email`, `Phone No.`, `Password`, 'Re-enter Password',
            `Date of Birth`, `Gender`, `Male`, `Female`, `Others`, `Address`, `Create`
        ],
    }

    commonData.getPageData().then((resp) => {
        let pageData = Object.assign(resp, data);
        if (pageData.signedUp == false)
            res.render('signup', pageData);
        else res.send("<h1>You are already Signed In!</h1>")
    }, (err) => {
        console.log(err);
    })
});

router.post('/', async(req, res) => {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 1);

    const signup = new signUp({
        firstName: req.body.fName,
        middleName: req.body.mName,
        lastName: req.body.lName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phNo,
        dob: req.body.dob,
        gender: req.body.gender,
        address: req.body.address,
        isActive: false,
        hasRegistered: false,
        dateOfSignUp: d,
    });
    
    if (signup.firstName == '' || signup.lastName == '' || signup.email == '' || signup.password == '' || signup.password != req.body.re_pass ||
        signup.phone == '' || signup.dob == null || signup.gender == '' || signup.address == '' || (new Date().getFullYear() - new Date(req.body.dob).getFullYear()) <= 12) {
        let data = {
            title: 'meFito - Sign Up',
            bgImg: "images/gym4.jpg",
            bodyTitle: 'Invalid Sign Up!',
            formTexts: [`First Name`, `Middle Name`, `Last Name`, `Email`, `Phone No.`, `Password`, 'Re-Pass',
                `Date of Birth`, `Gender`, `Male`, `Female`, `Others`, `Address`, `Create`
            ],
        }

        commonData.getPageData().then((resp) => {
            let pageData = Object.assign(resp, data);
            if (pageData.signedUp == false)
                res.render('signup', pageData);
            else res.send("<h1>You are already Signed In!</h1>")
        }, (err) => {
            console.log(err);
        })
    } else {
        await signup.save();
        res.redirect('/signup/success');
    }
    
});

router.get('/success', (req, res) => {
    data = {
        title: "meFito - Sign Up - Success",
        bgImg: "images/gym4.jpg",
        message: "You Have Successfully Signed Up!"
    }
    commonData.getPageData().then((resp) => {
        let pageData = Object.assign(resp, data);
        if (pageData.signedUp == false && pageData.Registered == false) {
            res.render('success', pageData);
        } else {
            res.send('<h1>Error 500!</h1>');
        }
    }, (err) => {
        console.log(err);
    })
});


module.exports = router;