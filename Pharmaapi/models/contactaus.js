const { constants } = require('buffer')
const Module = require('module')
const mongoose = require('mongoose')
const validator = require("validator")

const contact = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
      type:String,
      required:true
    },
    email:{
     type:String,
     required:true,
     unique:true,
     validate(value){
         if(!validator.isEmail(value)){
             throw new Error("Email is not valida")
         }
     }
    },
    subject:{
        type:String,
        required:true
    },
    messgae:{
        type:String,
        required:true
    }
})


const contactus = new mongoose.model("Contactus",contact)

module.exports = contactus;