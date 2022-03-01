const { constants } = require('buffer')
const Module = require('module')
const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')
const validator = require("validator")


const product = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    manufactureddate: {
        type: Date,
        default: Date.now
    },
    importdate: {
        type: Date,
        default: Date.now
    },
    expiredate: {
        type: Date,
        required: true,
    },
    productImage: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    }
})

const Product = new mongoose.model('Product', product)

module.exports = Product;