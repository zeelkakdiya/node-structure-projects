const Product = require("../models/product")
const multer = require('multer');
const express = require('express')
const path = require('path')
const hash = require('random-hash');
const app = express();
exports.getAllProducts = async (req, res) => {
    try {
        const getdataproduct = await Product.find({})
        return res.status(201).send(getdataproduct)
    } catch (err) {
        console.log(err)
        return res.status(401).send(err);
    }
}


exports.createAllProduct = async (req, res) => {
    console.log(req.file);
    try {

        const { name, price, manufactureddate, importdate, expiredate, details } = req.body;
        const productImage = req.file.path;

        const products = new Product({
            name: name,
            price: price,
            manufactureddate: manufactureddate,
            importdate: importdate,
            expiredate: expiredate,
            productImage: productImage,
            details: details
        })

        const pro = await products.save();

        if (!pro) {
            res.status(401).json({
                status: false,
                data: `${console.log('error must be provide')}`

            });
        }
        res.status(201).send(pro)

    } catch (err) {
        console.log(err)
        res.status(501).send(err)
    }

}
