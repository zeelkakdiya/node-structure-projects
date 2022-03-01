const expres = require("express")

const router = expres.Router();

const { Productinventroy, getproductinventory } = require("../controllers/Productinventroy")

router.post("/", Productinventroy);

router.get("/", getproductinventory);

module.exports = router;