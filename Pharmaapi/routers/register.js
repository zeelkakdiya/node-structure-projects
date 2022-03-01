const express = require('express')
const { gteAlluserdata, userRegister } = require("../controllers/register");
const authenticationtoken = require("../midlware/auth")

const router = express.Router()

router.get("/", authenticationtoken, gteAlluserdata)

router.post("/", userRegister)

module.exports = router;

