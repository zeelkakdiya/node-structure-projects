const express = require('express')
const { userlogine } = require("../controllers/register")
const authenticationtoken = require("../midlware/auth")

const router = express.Router()

router.post("/", userlogine)


module.exports = router;