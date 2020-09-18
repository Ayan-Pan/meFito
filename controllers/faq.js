var express = require('express');
var router = express.Router();
let commonData = require('./common');


router.get('/', function (req, res, next) {
    let data = {
        title: 'meFito - FAQs',
        bannerImg: "images/gym9.jpg",
        bodyTitle: "FAQs",
    }
    commonData.getFAQs().then((resp) => {
        data.cards = resp;
        // console.log(data.cards);
    })

    commonData.getPageData().then((resp) => {
        let pageData = Object.assign(resp, data);
        res.render('faq', pageData);
    }, (err) => {
        console.log(err);
    })
});

module.exports = router;