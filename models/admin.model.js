const mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    phone: {
        type: String,
    },
    dob: {
        type: Date,
    },
    gender: {
        type: String,
    },
    address: {
        type: String,
    },
    adminIsActive: {
        type: Boolean,
    }

});

module.exports = mongoose.model('admindetail', adminSchema);