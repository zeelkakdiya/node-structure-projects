const Productinventroy = require("../models/product-inventroy")
const express = require('express')
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


exports.Productinventroy = async (req, res) => {

    try {

        const { productid, unit, price, quntity } = req.body;

        const productinventory = Productinventroy({
            productid: productid,
            unit: unit,
            price: price,
            quntity: quntity
        })

        const productinventorydata = await productinventory.save();
        if (!productinventorydata) {
            res.status(401).send();
        }
        res.status(201).send(productinventorydata)
    } catch (err) {
        console.log(err)
        res.status(401).send(err)
    }

}

exports.getproductinventory = async (req, res) => {
    try {
        const getdataproductinventroy = await Productinventroy.find({})
            .populate("productid", "_id name")
        if (!getdataproductinventroy) {
            res.status(401).send();
        }
        res.status(201).send(getdataproductinventroy)
    } catch (err) {
        console.log(err)
        res.status(501).send(err)
    }
}