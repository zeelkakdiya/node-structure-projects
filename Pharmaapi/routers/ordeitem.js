const expres = require("express")

const router = expres.Router();

const { orderitem, getordeitemdata } = require("../controllers/Orderitem")

router.post("/", orderitem);

router.get("/", getordeitemdata);

module.exports = router;


