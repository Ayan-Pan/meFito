var express = require('express');
var router = express.Router();
let commonData = require('./common');


/* GET home page. */
router.get('/', function (req, res, next) {
    let data = {
        title: 'meFito - Aerobics',
        bannerImg: "images/ae4.jpg",
        bodyTitle: "About Our Aecrobics",
        subText: [{
            subImg: "images/ae2.jpg",
            content: `We offer the best in select programs that appeal to a wide of ages and abilities
            Emphasize that fitness is fun and leads to healthier, happier lifestyles
            Provide fitness leadership, information, opportunity and motivation,
            which will ultimately benefit each member in the reduction of
            preventable health risk factors.`
        }, {
            subImg: "images/ae7.jpg",
            content: `The Fitness 1440 Team is proud to demonstrate awareness,
            consistency and commitment to each and every member’s fitness
            goals!Fitness 1440 will provide you with the most modern and professional health club imaginable. More
            importantly, we will strive to meet the high level of client satisfaction that you expect from your health club.`
        }],

        features: [`Group Fitness Classes`, `Free Weights`, `Multiple Medicine Balls`, `Steam Room`,
            `Stair stepper`, `BodyRev `, `Dumbbells`, `Exercise mats`, `Toning Bars`
        ],

        tbl_hd: [`Aerobics Shifts`, `Fees Strcture of Aerobics`],

        shifts: ['Morning', 'Day', 'Evening'],
        timings: [`5:00 a.m. - 11:00 a.m`, `11:00 a.m - 5:00 p.m`, `5:00 p.m - 10:00 p.m`],

        packages: [`3 Months`, `6 Months`, `1 Year`],
        fees: ['Rs. 800', 'Rs. 1200', 'Rs. 1500']
    };

    commonData.getPageData().then((resp) => {
        let pageData = Object.assign(resp, data);
        res.render('aero', pageData);
    }, (err) => {
        console.log(err);
    })
});

module.exports = router;