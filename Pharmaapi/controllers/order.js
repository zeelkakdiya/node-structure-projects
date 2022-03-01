const Order = require("../models/order")
const express = require('express')
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

exports.order = async (req, res) => {
    try {

        const { productid, quntity, totalprice, orderdate, paymentdate, userid, discount, comment, status } = req.body;


        const orde = new Order({
            productid: productid,
            quntity: quntity,
            totalprice: totalprice,
            orderdate: orderdate,
            paymentdate: paymentdate,
            userid: userid,
            discount: discount,
            comment: comment,
            status: status
        })

        const orders = await orde.save();
        if (!orders) {
            res.status(501).send();
        }
        res.status(201).send(orders)
    } catch (err) {
        console.log(err)
        res.status(500).send();
    }
}

exports.getorderdata = async (req, res) => {
    try {
        const getdataorder = await Order.find()
            .populate("productid userid", "_id name")
        res.status(201).send(getdataorder);
    } catch (err) {
        console.log(err)
        res.status(501).send(err)
    }
}