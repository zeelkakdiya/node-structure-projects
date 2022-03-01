const { constants } = require('buffer')
const Module = require('module')
const mongoose = require('mongoose')
const validator = require("validator")

const userpayment = new mongoose.Schema({
     userid:{
          type: mongoose.Schema.Types.ObjectId,
          ref:'Register',
          required:true,
          unique:true
     },
     typespayment:{
        type:String,
        required:true,
        enum: ['COD','GOOGLEPAY','UPI']
    },
     account_no:{
         type:Number,
         required:true,
         unique:true
     },
     paymentdate:{
         type:Date,
         default:Date.now
     },
     phone:{
         type:Number,
         required:true,
         unique:true
     }
})

const Userpayment = new mongoose.model('Userpayment' , userpayment)

module.exports = Userpayment;

