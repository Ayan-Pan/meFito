var express = require('express');
var router = express.Router();
let commonData = require('./common');

/* GET home page. */
router.get('/', function(req, res, next) {
    let data = {
        title: 'meFito - Contact',
        bannerImg: "images/yo2.jpg",
        bodyTitle: "Contact Us",
        cards: [{
            title: 'Address',
            text: 'This is a longer card with supporting .',
        }, {
            title: 'E-mail',
            text: 'test@example.com',
        }, {
            title: 'Phone',
            text: ['+91 987 654 3210', '+91 987 654 3210'],
        }],
    }

    commonData.getPageData().then((resp) => {
        let pageData = Object.assign(resp, data);
        res.render('contact', pageData);
    }, (err) => {
        console.log(err);
    })
});

module.exports = router;