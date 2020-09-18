var express = require('express');
var router = express.Router();
let faq = require('../models/faq.model');

router.post('/', (req, res, next) => {
    faq.findOne({ _id: req.body.faq_id }, (err, docs) => {
        if (err) throw err;
        docs.active = false;
        docs.save();
        res.redirect(`/addfaq`);
    })
})

module.exports = router;