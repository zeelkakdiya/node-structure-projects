const expres = require("express")

const router = expres.Router();
const { addcustomer, getcustomerdata } = require("../controllers/Customer")

router.post("/", addcustomer)

router.get("/", getcustomerdata)

module.exports = router