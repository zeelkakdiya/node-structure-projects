const { constants } = require('buffer')
const Module = require('module')
const mongoose = require('mongoose')
const validator = require("validator")

const useraddress = new mongoose.Schema({
     userid:{
          type: mongoose.Schema.Types.ObjectId,
          ref:'Register',
          required:true,
          unique:true
     },
     address:{
         type:String,
         required:true
     },
     city:{
         type:String,
         required:true
     },
     pincode:{
         type:Number,
         required:true
     },
     country:{
         type:String,
         required:true
     },
     phoneno:{
         type:Number,
         required:true,
         unique:true
     }
})

const useradd = new mongoose.model('Useraddress' , useraddress)

module.exports = useradd;

