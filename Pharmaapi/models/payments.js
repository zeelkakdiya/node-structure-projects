const { constants } = require('buffer')
const Module = require('module')
const mongoose = require('mongoose')
const validator = require("validator")

const payment = new mongoose.Schema({

     pmode:{
        type:String,
        required:true,
        enum: ['COD','GOOGLEPAY','UPI','NETBANKING']
    },
     chequeno:{
         type:Number,
         required:true,
         unique:true
     },
     chequedate:{
         type:Date,
         required:true,
         unique:true
     },
     bankname:{
         type:String,
         required:true,
     },
     paymentdate:{
         type:Date,
         default:Date.now
     }
})

const Payment = new mongoose.model('Payment' , payment)

module.exports = Payment;

