const Userpayment = require("../models/userpayment")

const express = require('express')
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

exports.userPayment = async (req, res) => {
    try {

        const { userid, typespayment, account_no, paymentdate, phone } = req.body;

        const userpayment = new Userpayment({
            userid: userid,
            typespayment: typespayment,
            account_no: account_no,
            paymentdate: paymentdate,
            phone: phone
        })

        const userpaymnet = await userpayment.save();
        if (!userpaymnet) {
            res.status(401).send();
        }
        res.status(201).send(userpaymnet)

    } catch (err) {
        console.log(err)
        res.status(err).send(err)
    }
}

exports.getpaymentdata = async (req, res) => {
    try {
        const getdatauserpayment = await Userpayment.find()
            .populate("userid")

        res.status(201).json({
            success: [{
                messgae: "getdata",
                data: getdatauserpayment
            }]
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            error: err.messgae
        })
    }
}
