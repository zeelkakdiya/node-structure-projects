const expres = require("express")

const router = expres.Router();

const { payment, getpaymentdatas } = require("../controllers/Payment")

router.post("/", payment);

router.get("/", getpaymentdatas);

module.exports = router;


