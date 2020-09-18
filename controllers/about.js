var express = require('express');
var router = express.Router();
let commonData = require('./common');

/* GET home page. */
router.get('/', function (req, res, next) {
    let data = {
        title: 'meFito - About',
        bannerImg: "images/gym3.jpg",
        bodyTitle: "About Us",

        subText: [{
            subImg: "images/gym21.jpg",
            content: `meFito was founded with a mission to provide family fitness programs, selective services, and
        immaculate facilities, sensitive to the unique needs of our quality conscious community clientele.`
        }, {
                subImg: "images/gym22.jpg",
            content: `We are in the business of motivating communities to mobilize and energize one another.
        At meFito, it’s not just about weight and measurements. It’s about helping spur one another on to achieve your goals and do more than you ever thought possible.`,
        }, {
                subImg: "images/ae3.jpg",
            content: `We are firm believers in charity and we encourage both personal and club involvement in local charitable organizations. Each club is designed to be a 
        part of the neighborhood it serves, adding a unique aspect of “giving back” that most fitness franchises do not provide. meFito partners with each one of our clubs to support local programs and leave an impact on your community.`
        }]
    }

    commonData.getPageData().then((resp) => {
        let pageData = Object.assign(resp, data);
        res.render('about', pageData);
    }, (err) => {
        console.log(err);
    })
});

module.exports = router;