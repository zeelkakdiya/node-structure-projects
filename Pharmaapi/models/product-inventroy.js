const { constants } = require('buffer')
const Module = require('module')
const mongoose = require('mongoose')
const validator = require("validator")


const productinventroy =  new mongoose.Schema({

    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true,
        unique:true
    },
    unit:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quntity:{
      type:Number,
      required:true
    }

})


const Productinventroy =  new mongoose.model("Productinventroy",productinventroy)

module.exports = Productinventroy;