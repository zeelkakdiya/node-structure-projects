const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/pharma",{

}).then(() =>{
    console.log("connection Suucesfully")
}).catch((error) =>{
    console.log(`No connection ${error}`)
})