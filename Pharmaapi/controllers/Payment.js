const Payment = require("../models/payments")

const express = require('express')
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

exports.payment = async (req, res) => {
    try {

        const { pmode, chequeno, chequedate, bankname, paymentdate } = req.body;

        const paymenr = new Payment({
            pmode: pmode,
            chequeno: chequeno,
            chequedate: chequedate,
            bankname: bankname,
            paymentdate: paymentdate
        })

        const paymentdata = await paymenr.save();

        if (!paymentdata) {
            res.status(401).send();
        }

        res.status(201).send(paymentdata)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
}

exports.getpaymentdatas = async (req, res) => {
    try {
        const getpaymentdata = await Payment.find()
        res.status(201).send(getpaymentdata)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
}
