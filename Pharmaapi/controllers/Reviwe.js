const Reviwe = require("../models/reviwe")
const express = require('express')
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

exports.reviwe = async (req, res, next) => {

    try {


        const { cid, productid, reviwe, dateofreviwe } = req.body;

        const reviwes = new Reviwe({
            cid: cid,
            productid: productid,
            reviwe: reviwe,
            dateofreviwe: dateofreviwe
        })

        const reviwess = await reviwes.save();
        res.status(201).send(reviwess)

    } catch (err) {
        console.log(err)
        res.status(err).send(err)
    }

}

exports.getuserreviwedata = async (req, res) => {
    try {
        const getdatareviwe = await Reviwe.find()
            .populate("cid productid", "_id name")

        if (!getdatareviwe) {
            res.status(401).send();
        }
        res.status(201).send(getdatareviwe)
    } catch (err) {
        console.log(err)
        res.status(201).send(err)
    }

}