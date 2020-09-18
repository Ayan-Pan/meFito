const trainerDetail = require('../models/trainer.model');
let commonData = require('../controllers/common');


let getTrainer = (req, res, next)=>{
    let trainer = [req.body.trainer_email, req.body.trainer_pass];
    // console.log(trainer); 

    data = {
        title: 'meFito  - Trainer Details Update',
        space: ' ',
        bodyText: ['Current Delatils', 'Update Details'],
        formTexts: [`First Name`, `Middle Name`, `Last Name`, `Email`, `Phone No.`, `Password`, `Re-Pass`,
            `Date of Birth`, `Gender`, `Male`, `Female`, `Others`, `Address`,
            `Trainer Of`, `Gym`, `Aerobics`, `Yoga`, `Shift`, `Morning`, `Day`, `Evening`, `Update`
        ],
    }

    trainerDetail.findOne({ email: trainer[0], password: trainer[1] }, (err, docs) => {
        if (err) throw err;
        data.trainerDetails = docs;
    })

    commonData.getAdminData().then((resp) => {
        if (resp.adminIsActive == false) {
            res.send("<h1>Sign Up Please</h1>");
        } else {
            let pageData = Object.assign(resp, data);
            // console.log(pageData.trainerDetails);
            res.render('trainer_update', pageData);
        }
    }, (err) => {
        console.log(err);
    })

    next();
}

module.exports = getTrainer;