const Customer = require("../models/customer")
const express = require('express')
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

exports.addcustomer = async (req, res) => {
    try {
        const { name, address, orderid, productid, contact, typespayment, totalprice } = req.body;

        const customeror = new Customer({
            name: name,
            address: address,
            orderid: orderid,
            productid: productid,
            contact: contact,
            typespayment: typespayment,
            totalprice: totalprice,
        })

        const customerdetails = await customeror.save();
        if (!customerdetails) {
            res.status(401).send();
        }
        res.status(201).send(customerdetails)
    } catch (err) {
        console.log(err)
        res.status(501).send(err)
    }
}

exports.getcustomerdata = async (req, res) => {
    try {
        const customer = await Customer.find()
            .populate("orderid productid", "_id name ")

        res.status(201).send(customer)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
}