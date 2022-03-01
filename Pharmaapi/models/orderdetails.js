const { constants } = require('buffer')
const Module = require('module')
const mongoose = require('mongoose')
const validator = require("validator")

const orderdetails = new mongoose.Schema({

    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Register',
        required: true,
        unique: true
    },
    totalpayment: {
        type: Number,
        required: true
    },
    paymentid: {
        type: String,
        required: true
    },

})

const Orderdetails = new mongoose.model('Orderdetails', orderdetails)

module.exports = Orderdetails;