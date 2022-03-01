const expres = require("express")

const router = expres.Router();

const { paymentdetails, getpaymentdetails } = require("../controllers/Paymentdetails")

router.post("/", paymentdetails);

router.get("/", getpaymentdetails);

module.exports = router;


