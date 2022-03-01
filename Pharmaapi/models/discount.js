const { constants } = require('buffer')
const Module = require('module')
const mongoose = require('mongoose')
const validator = require("validator")

const discount = new mongoose.Schema({
    pname:{
        type:String,
        required:true
    },
    discount:{
        type:Number,
        required:true
    },
    archive:{
        type:Boolean,
        required:true
    },
    totalprice:{
        type:Number,
        required:true
    }
})

const Discount = new mongoose.model("Discount",discount)

module.exports = Discount;