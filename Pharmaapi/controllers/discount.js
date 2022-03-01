const Discount = require("../models/discount")
const express = require('express')
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

exports.discountproduct = async (req, res) => {
    try {

        const { pname, discount, archive, totalprice } = req.body;

        const dis = new Discount({
            pname: pname,
            discount: discount,
            archive: archive,
            totalprice: totalprice,
        })

        const discounts = await dis.save();
        if (!discounts) {
            return res.status(501).send();
        }
        res.status(201).send(discounts)
    } catch (err) {
        console.log(err)
        return res.status(500).send();
    }
}

exports.discougetdaa = async (req, res) => {
    try {
        const getdatadiscount = await Discount.find()
        res.status(201).send(getdatadiscount);
    } catch (err) {
        console.log(err)
        res.status(501).send(err)
    }
}