const mongoose = require('mongoose');

var trainerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'This field is required.'
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: 'This field is required.'

    },
    email: {
        type: String,
        required: 'This field is required.'
    },
    phone: {
        type: String,
        required: 'This field is required.'
    },
    dob: {
        type: Date,
        required: 'This field is required.'
    },
    gender: {
        type: String,
        required: 'This field is required.'

    },
    address: {
        type: String,
        required: 'This field is required.'
    },
    trainerof: {
        type: String,

    },
    shift: {
        type: String,
    },
    active: {
        type: Boolean,
    },

});

module.exports = mongoose.model('trainerdetail', trainerSchema);