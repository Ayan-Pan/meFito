const mongoose = require('mongoose');

var signedUpSchema = new mongoose.Schema({
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
    password: {
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
    isActive: {
        type: Boolean,
    },
    hasRegistered: {
        type: Boolean,
    },
    dateOfSignUp: {
        type: Date,
    }
});

// Custom validation for email
signedUpSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

module.exports = mongoose.model('signedUp', signedUpSchema);