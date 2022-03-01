const expres = require("express")

const router = expres.Router();

const { order, getorderdata } = require("../controllers/order")

router.post("/", order);

router.get("/", getorderdata);

module.exports = router;


