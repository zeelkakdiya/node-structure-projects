const expres = require("express")

const router = expres.Router();
const { contactaus, getcontactdata } = require("../controllers/contactus")

router.post("/", contactaus)

router.get("/", getcontactdata)

module.exports = router