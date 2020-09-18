var express = require('express');
var router = express.Router();
let commonData = require('./common');

// npm i - S pg
// https://github.com/CodAffection/Node.js-Expess-MongoDB-CRUD.git

/* GET home page. */
router.get('/', function (req, res, next) {
    let data = {
        title: 'meFito',
        bannerImg: [
            "images/gym2.jpg",
            "images/ae1.jpg",
            "images/yo1.jpg"
        ],
        bodyTitle: ["Our Mission", "Our Sponsors"],
        missionCards: [{
            title: 'Stronger',
            icon: '/images/gym17.jpg',
            text: 'We will make you stronger with best possible ways of our both resistance and cardio training.',
        }, {
            title: 'Flexible',
            icon: '/images/ae6.jpg',
            text: 'We will make you flexible to improve mobility, posture, muscle coordination and overall perfection of body-shape.',
        }, {
            title: 'Dedicate',
            icon: '/images/yo4.jpg',
            text: 'We will help you to be dedicated to all your daily works and also to produce a deep state of relaxation and a tranquil mind.',
        }],

    };

    commonData.getPageData().then((resp) => {
        let pageData = Object.assign(resp, data);
        res.render('index', pageData);
    }, (err) => {
        console.log(err);
    })




});

module.exports = router;