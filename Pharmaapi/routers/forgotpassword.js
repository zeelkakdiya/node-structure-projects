const expres = require('express');
const { forgotpassword, changepassword } = require("../controllers/forgotpassword")
const router = expres.Router();

router.put("/:id", forgotpassword);

router.patch("/:id", changepassword);


module.exports = router