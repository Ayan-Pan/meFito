var express = require('express');
var router = express.Router();
let commonData = require('./common');
const url = require('url');
let faq = require('../models/faq.model');
let query = {};

router.get('/', (req, res, next) => {
    const queryObject = url.parse(req.url, true).query;
    // console.log(queryObject);

    query.id = queryObject.faq_id;
    // console.log(queryObject);

    data = {
        title: 'meFito - FAQ Update',
        bodyText: ['Current FAQ Delatils', 'Update FAQ Details'],

    }

    faq.findOne({ _id: queryObject.faq_id }, (err, docs) => {
        if (err) throw err;
        data.faqDetails = docs;
        console.log(docs);
    })

    commonData.getAdminData().then((resp) => {
        let pageData = Object.assign(resp, data);
        // console.log(pageData.trainerDetails);
        res.render('update_faq', pageData);
    }, (err) => {
        console.log(err);
    })
})

router.post('/', (req, res, next) => {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate());

    faq.findOne({ _id: query.id }, (err, docs) => {
        if (err) throw err;

        if (req.body.title != '')
            docs.title = req.body.title;
        else if (req.body.content != '')
            docs.content = req.body.content;

        docs.date = d;

        docs.save();

        res.redirect(`/upadatefaq?faq_id=${query.id}`);
    })
})

module.exports = router;