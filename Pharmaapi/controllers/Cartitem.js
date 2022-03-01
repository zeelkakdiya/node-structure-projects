const Cartitem = require("../models/cart_item")
const express = require('express')
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

exports.addCartItem = async (req, res) => {

    const { totaldiscount, orignalprice, productid, quntity } = req.body;
    const discountuse = totaldiscount / 100;
    const totalprices = orignalprice - (orignalprice * discountuse)

    try {

        const price = new Cartitem({
            productid: productid,
            quntity: quntity,
            totaldiscount: discountuse,
            orignalprice: orignalprice,
            totalamount: totalprices
        })

        const prices = await price.save();
        res.status(200).json({
            success: [{
                messgae: "Disccount works",
                data: prices
            }]
        })


    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            error: err.messgae,
        })
    }
}

exports.getCartItem = async (req, res) => {
    try {
        const getdatacartitem = await Cartitem.find()
            .populate("productid", "_id productImage")

        res.status(201).json({
            success: [{
                messgae: "getdata",
                data: getdatacartitem
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