const { constants } = require('buffer')
const Module = require('module')
const mongoose = require('mongoose')
const validator = require("validator")

const cartitem = new mongoose.Schema({
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
     totaldiscount:{
         type:String,
         required:true
     },
     orignalprice:{
         type:Number,
         required:true
     },
     totalamount:{
         type:Number,
         required:true
     },
     
})

const Cartitem = new mongoose.model('Cartitem' , cartitem)

module.exports = Cartitem;

