"use strict"
const mongoose = require('mongoose');
const schema = mongoose.Schema;

var itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: schema.Types.ObjectId,
        ref: "categories"
    }
}, {
    timestamps: true,
});

itemSchema.index({ name: 'text' });
var items = mongoose.model('items', itemSchema);
module.exports = {
    items,
}