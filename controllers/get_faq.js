var express = require('express');
var router = express.Router();

router.post('/', (req, res, next) => {
    let faq_id = req.body.faq_id;
    // console.log(faq_id);
    res.redirect(`/upadatefaq?faq_id=${faq_id}`);
})

module.exports = router;