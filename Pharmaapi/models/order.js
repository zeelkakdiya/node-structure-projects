const { constants } = require('buffer')
const Module = require('module')
const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')
const validator = require("validator")


const order = new mongoose.Schema({
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        unique:true,
        required:true
    },
    quntity:{
        type:Number,
        required:true
    },
    totalprice:{
        type:Number,
        required:true
    },
    orderdate:{
        type:Date,
        default: Date.now
    },
    paymentdate:{
        type:Date,
        default: Date.now
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Register",
        required:true

    },
    discount:{
        type:Number,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["paid","unpaid"],
        requiredPaths:true
    }
})

const Order = new mongoose.model('Order',order)

module.exports = Order;