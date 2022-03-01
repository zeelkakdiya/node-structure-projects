const expres = require("express")

const router = expres.Router();

const { orderdetails, getorderdetails, updateorders, totalpayment } = require("../controllers/Orderdetails")

router.post("/", orderdetails);

router.get("/", getorderdetails);

router.patch("/:id", updateorders);

router.get("/:totalpayment", totalpayment)

module.exports = router;


