const expres = require("express")

const router = expres.Router();

const { userPayment, getpaymentdata } = require("../controllers/Userpayment")

router.post("/", userPayment);

router.get("/", getpaymentdata);

module.exports = router;


