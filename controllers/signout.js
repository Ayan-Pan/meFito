var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const signUp = require('../models/signedUp.model');
let commonData = require('./common');

router.post('/', (req, res, next) => {
    commonData.getPageData().then((resp) => {
        signUp.findOne({ email: resp.signedAddress, password: resp.signedPassword }, (err, docs) => {
            if (err) return console.error(err);
            else {
                docs.isActive = false;
                docs.save();
                res.redirect('/');
            };
        });
    }, (err) => {
        console.log(err);
    })


})

module.exports = router;