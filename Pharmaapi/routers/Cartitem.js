const expres = require("express")

const router = expres.Router();
const { addCartItem, getCartItem } = require("../controllers/Cartitem")

router.post("/", addCartItem)

router.get("/", getCartItem)

module.exports = router