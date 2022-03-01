const { constants } = require('buffer')
const Module = require('module')
const mongoose = require('mongoose')
const validator = require("validator")

const orderitem = new mongoose.Schema({

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
        required:true
    },
    
})

const Orderitem = new mongoose.model('Orderitem',orderitem)

module.exports = Orderitem;