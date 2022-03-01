const Orderdetails = require("../models/orderdetails")
const express = require('express')
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

exports.orderdetails = async (req, res) => {
    try {
        const { userid, totalpayment, paymentid } = req.body;

        const ordedetails = new Orderdetails({
            userid: userid,
            totalpayment: totalpayment,
            paymentid: paymentid,

        })

        const orderdeta = await ordedetails.save();
        if (!orderdeta) {
            res.status(501).send();
        }
        return res.status(201).send(orderdeta)
    } catch (err) {
        console.log(err)
        res.status(500).send();
    }
}

exports.getorderdetails = async (req, res) => {
    try {
        const getdataorderdetail = await Orderdetails.find()
            .populate("userid")
        res.status(201).send(getdataorderdetail);
    } catch (err) {
        console.log(err)
        res.status(501).send(err)
    }

}

exports.updateorders = async (req, res) => {
    try {
        const _id = req.params.id
        const updateorder = await Orderdetails.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        if (!_id) {
            return res.status(401).send();
        }
        else {
            res.status(201).send(updateorder)
        }
    } catch (err) {
        console.log(err)
        res.status(501).send(err)
    }
}

exports.totalpayment = async (req, res) => {
    try {
        const totalpayment = req.params.totalpayment

        const ordedetailget = await Orderdetails.find({ totalpayment: totalpayment })

        if (!ordedetailget) {
            res.status(401).send();
        }
        res.status(201).send(ordedetailget)

    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }

}