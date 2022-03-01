const Orderitem = require("../models/orderitem")
const express = require('express')
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

exports.orderitem = async (req, res) => {
    try {

        const { orderid, productid, quntity } = req.body;

        const ordeitem = new Orderitem({
            orderid: orderid,
            productid: productid,
            quntity: quntity,

        })

        const orderitems = await ordeitem.save();
        if (!orderitems) {
            res.status(501).send();
        }
        res.status(201).send(orderitems)
    } catch (err) {
        console.log(err)
        res.status(500).send();
    }
}


exports.getordeitemdata = async (req, res) => {
    try {
        const getdataorderitem = await Orderitem.find()
            .populate("orderid productid", "_id price")
        res.status(201).send(getdataorderitem);
    } catch (err) {
        console.log(err)
        res.status(501).send(err)
    }
}