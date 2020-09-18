var express = require('express');
var router = express.Router();

router.post('/', (req, res, next)=>{
    let trainer_id = req.body.trainer_id;
    // console.log(trainer_id);
    res.redirect(`/trainerupdate?trainer_id=${trainer_id}`);
})

module.exports = router;