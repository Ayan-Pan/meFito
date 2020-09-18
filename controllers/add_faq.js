var express = require('express');
var router = express.Router();
let commonData = require('./common');
let faq = require('../models/faq.model');


router.get('/', function (req, res, next) {
    data = {
        title: 'meFito - Admin - FAQ',
        bodyText: ['Enter FAQ', 'FAQ details']
    };

    commonData.getFAQs().then((resp) => {
        data.faqList = resp;
        // console.log(resp);
    }).catch((err) => {
        console.log(err);
    });


    commonData.getAdminData().then((resp) => {
        let pageData = Object.assign(resp, data);
        console.log(pageData.details);
        res.render('add_faq', pageData);
    }, (err) => {
        console.log(err);
    })
});

router.post('/', async (req, res, next) => {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 1);

    if (req.body.title == '' || req.body.content == '') {
        data = {
            title: 'meFito - Admin - FAQ',
            bodyText: ['Invalid Details Given!', 'FAQ details']
        };

        commonData.getFAQs().then((resp) => {
            data.faqList = resp;
            // console.log(resp);
        }).catch((err) => {
            console.log(err);
        });

        commonData.getAdminData().then((resp) => {
            let pageData = Object.assign(resp, data);
            console.log(pageData.details);
            res.render('add_faq', pageData);
        }, (err) => {
            console.log(err);
        })
    } else {

        const faqData = new faq({
            title: req.body.title,
            content: req.body.content,
            date: d,
            active: true
        });

        await faqData.save();
        res.redirect('/addfaq');
    }
})

module.exports = router;