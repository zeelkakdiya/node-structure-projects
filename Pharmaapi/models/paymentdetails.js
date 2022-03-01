
const Module = require('module')
const mongoose = require('mongoose')
const validator = require("validator")


const paymentdetails = new mongoose.Schema({

    orderid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order",
        unique:true,
        required:true
    },
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        unique:true,
        required:true
    },
    quntity:{
        type:Number,
        required:true,
     
    },
    pymode:{
        type:String,
        required:true,
        enum: ['COD','GOOGLEPAY','UPI','NETBANKING']
    },
    pymentdate:{
        type:Date,
        default:Date.now
    }
})

const Paymentdetails = new mongoose.model('Paymentdetails' , paymentdetails)

module.exports = Paymentdetails;

