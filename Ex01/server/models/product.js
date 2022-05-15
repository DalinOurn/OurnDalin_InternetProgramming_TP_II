"use strict"
const { json } = require('express/lib/response');
const { object } = require('joi');
const mongoose = require('mongoose');
const schema = mongoose.Schema;

var productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    imageURL: {
        type: String,
        required: true
    },
    shop: {
        type: Array,
        required: true
    },
    item: {
        type: schema.Types.ObjectId,
        ref: "items"
    }
}, {
    timestamps: true,
});

productSchema.index({ name: 'text' });
var products = mongoose.model('products', productSchema);
module.exports = {
    products,
}