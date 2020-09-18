var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
let commonData = require('./common');
const adminDetail = require('../models/admin.model');


router.post('/', (req, res, next) => {
    adminDetail.findOne({ _id: Object("5f51c45e7688491e000bb68c") }, (err, docs) => {
        if (err) console.error(err);
        else {
            docs.adminIsActive = false;
            docs.save();
            res.redirect('/adminsignup');
        };
    });

})

module.exports = router;