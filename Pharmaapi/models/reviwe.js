const { constants } = require('buffer')
const Module = require('module')
const mongoose = require('mongoose')
const validator = require("validator")

const reviwe = new mongoose.Schema({
    cid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true,
        unique: true
    },
    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        unique: true,
        required: true
    },
    reviwe: {
        type: String,
        required: true,

    },
    dateofreviwe: {
        type: Date,
        default: Date.now
    },

})

const Reviwe = new mongoose.model('Reviwe', reviwe)

module.exports = Reviwe;

