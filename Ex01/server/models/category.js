"use strict"
const mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

var category = mongoose.model('categories', categorySchema);
module.exports = {
    category,
}