var express = require('express');
var router = express.Router();
let commonData = require('./common');



/* GET home page. */
router.get('/', function (req, res, next) {
    let data = {
        title: 'meFito - Gym',
        bannerImg: "images/gym1.jpg",
        bodyTitle: "About Our Gym",

        subText: [{
            subImg: "images/gym23.jpg",
            content: `We offer the best in select programs that appeal to a wide of ages and abilities
            Emphasize that fitness is fun and leads to healthier, happier lifestyles
            Provide fitness leadership, information, opportunity and motivation,
            which will ultimately benefit each member in the reduction of
            preventable health risk factors.`
        }, {
            subImg: "images/gym24.jpg",
            content: `The Fitness 1440 Team is proud to demonstrate awareness,
            consistency and commitment to each and every member’s fitness
            goals!Fitness 1440 will provide you with the most modern and professional health club imaginable. More
            importantly, we will strive to meet the high level of client satisfaction that you expect from your health club.`
        }],

        features: [`Group Fitness Classes`, `Free Weights`, `Treadmils`, `Cross-Trainers`, `Cycles`,
            `Dumbles of Various Weights`, `Plates of Various Weights`, `Bench-Press`, `Chest-Press Machine`,
            `Cable Cross`, `Cross Extension`, `Steam Room`
        ],

        tbl_hd: [`Gym Shifts`, `Fees Strcture of Gym`],

        shifts: ['Morning', 'Day', 'Evening'],
        timings: [`5:00 a.m. - 11:00 a.m`,`11:00 a.m - 5:00 p.m`,`5:00 p.m - 10:00 p.m`],

        packages: [`3 Months`, `6 Months`, `1 Year`],
        fees: ['Rs. 1000', 'Rs. 1500', 'Rs. 2000']
    };

    commonData.getPageData().then((resp) => {
        let pageData = Object.assign(resp, data);
        res.render('gym', pageData);
    }, (err) => {
        console.log(err);
    })
});

module.exports = router;