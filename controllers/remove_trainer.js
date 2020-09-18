var express = require('express');
var router = express.Router();
const trainerDetail = require('../models/trainer.model');


router.post('/', (req, res, next) => {
    trainerDetail.findOne({ _id: req.body.trainer_id }, (err, docs) => {
        if (err) throw err;
        docs.active = false;
        docs.save();
        res.redirect(`/trainerdetails`);
    })
})

module.exports = router;