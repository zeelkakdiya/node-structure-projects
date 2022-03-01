const express = require('express')
const { getAllProducts, createAllProduct } = require('../controllers/product')
const upload = require("../utils/product.utils")


const router = express.Router()

router.get("/", getAllProducts)

router.post("/", upload.single("productImage"), createAllProduct)



module.exports = router