
const Module = require('module')
const mongoose = require('mongoose')
const validator = require("validator")


const customer = new mongoose.Schema({
    name:{
         type: String,
         required:true,
         
    },
    address:{
        type:String,
        required:true
    },
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
    contact:{
        type:Number,
        required:true,
        unique:true,
        maxlength:12,
    },
    typespayment:{
        type:String,
        required:true,
        enum: ['COD','GOOGLEPAY','UPI']
    },
    totalprice:{
        type:String,
        required:true
    }
})

const Customer = new mongoose.model('Customer' , customer)

module.exports = Customer;

