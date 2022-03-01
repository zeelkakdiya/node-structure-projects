const useadd = require("../models/useraddress")
const express = require('express')
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

exports.useraddress = async (req, res) => {

    try {

        const { userid, address, city, pincode, country, phoneno } = req.body;

        const useraddress = new useadd({
            userid: userid,
            address: address,
            city: city,
            pincode: pincode,
            country: country,
            phoneno: phoneno
        })

        const useaddre = await useraddress.save();

        if (!useaddre) {
            res.status(401).send();
        }

        res.status(201).send(useaddre)
    } catch (error) {
        console.log(error)
        res.status(401).json({
            status: false,
            data: error.messgage
        })
    }

}

exports.getdatauseraddress = async (req, res) => {
    try {
        const usergedata = await useadd.find({})
            .populate("userid", "_id")
        res.status(201).send(usergedata)
    } catch (err) {
        console.log(err)
        res.status(501).send(err)
    }

}

