const expres = require("express")

const router = expres.Router();

const { useraddress, getdatauseraddress } = require("../controllers/useraddress")

router.post("/", useraddress);

router.get("/", getdatauseraddress);

module.exports = router;


