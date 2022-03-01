const expres = require("express")

const router = expres.Router();

const { discountproduct, discougetdaa } = require("../controllers/discount")

router.post("/", discountproduct);

router.get("/", discougetdaa);

module.exports = router;


