var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
let commonData = require('./common');
const adminDetail = require('../models/admin.model');


router.get('/', function(req, res, next) {
    res.render('admin_signup', { title: 'Express' });
});

router.post('/', (req, res, next) => {
    var eAddr = req.body.email;
    var pass = req.body.password;

    adminDetail.findOne({ email: eAddr, password: pass }, (err, docs) => {
        if (err) {
            console.error(err);
            return err;
        } else {
            if (docs == null) {
                console.log("Invalid Data!");
                res.redirect("/adminsignup");
            } else {
                // console.log(docs);
                docs.adminIsActive = true;
                docs.save();
                // commonData.setAdminData(eAddr, pass);
                // console.log(docs);
                res.redirect('/admin');
            }
        };
    })
})

module.exports = router;