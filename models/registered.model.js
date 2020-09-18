const mongoose = require('mongoose');

var registerSchema = new mongoose.Schema({
    name: {
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
    course: {
        type: String,
        required: 'This field is required.'
    },
    shift: {
        type: String,
        required: 'This field is required.'
    },
    package: {
        type: String,
        required: 'This field is required.'
    },
    dateOfJoing: {
        type: Date,
    },
    success: {
        type: Boolean,
    }

});

module.exports = mongoose.model('registered', registerSchema);