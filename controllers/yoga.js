var express = require('express');
var router = express.Router();
let commonData = require('./common');


/* GET home page. */
router.get('/', function (req, res, next) {
    let data = {
        title: 'meFito - Yoga',
        bannerImg: "images/yo3.jpg",
        bodyTitle: "About Our Yoga",
        subText: [{
            subImg: "images/yo5.jpg",
            content: `We offer the best in select programs that appeal to a wide of ages and abilities
            Emphasize that fitness is fun and leads to healthier, happier lifestyles
            Provide fitness leadership, information, opportunity and motivation,
            which will ultimately benefit each member in the reduction of
            preventable health risk factors.`
        }, {
            subImg: "images/yo6.jpg",
            content: `The Fitness 1440 Team is proud to demonstrate awareness,
            consistency and commitment to each and every member’s fitness
            goals!Fitness 1440 will provide you with the most modern and professional health club imaginable. More
            importantly, we will strive to meet the high level of client satisfaction that you expect from your health club.`
        }],

        features: [`Group Fitness Classes`, `Free Weights`, `Steam Room`, `Yoga Mats`, `Straps`,
            `Blocks`, `Bolsters`, `Meditation cushions`, `Incense sticks`
        ],

        tbl_hd: [`Yoga Shifts`, `Fees Strcture of Yoga`],

        shifts: ['Morning', 'Day', 'Evening'],
        timings: [`5:00 a.m. - 11:00 a.m`, `11:00 a.m - 5:00 p.m`, `5:00 p.m - 10:00 p.m`],

        packages: [`3 Months`, `6 Months`, `1 Year`],
        fees: ['Rs. 600', 'Rs. 800', 'Rs. 1000']
    };

    commonData.getPageData().then((resp) => {
        let pageData = Object.assign(resp, data);
        res.render('yoga', pageData);
    }, (err) => {
        console.log(err);
    })
});

module.exports = router;