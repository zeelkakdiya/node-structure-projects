const Paymentdetails = require("../models/paymentdetails")

const express = require('express')
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

exports.paymentdetails = async (req, res) => {
    try {

        const { orderid, productid, quntity, pymode, pymentdate } = req.body;

        const paymentdetails = new Paymentdetails({

            orderid: orderid,
            productid: productid,
            quntity: quntity,
            pymode: pymode,
            pymentdate: pymentdate,
        })

        const paymentdetailss = await paymentdetails.save();
        if (!paymentdetailss) {
            res.status(401).send();
        }
        res.status(201).send(paymentdetailss)
    } catch (err) {
        console.log(err)
        res.status(501).send(err)
    }
}

exports.getpaymentdetails = async (req, res) => {
    try {
        const getpaymentdetaildata = await Paymentdetails.find()
            .populate("orderid productid")

        res.status(201).send(getpaymentdetaildata)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }

}