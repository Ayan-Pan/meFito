const mongoose = require('mongoose');

var faqSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'This field is required.'
    },
    content: {
        type: String,
        required: 'This field is required.'
    },
    date: {
        type: Date,
    },
    active: {
        type: Boolean,
    }

});

module.exports = mongoose.model('faq', faqSchema);