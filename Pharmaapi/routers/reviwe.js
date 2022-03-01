const expres = require("express")

const router = expres.Router();

const { reviwe, getuserreviwedata } = require("../controllers/Reviwe")

router.post("/", reviwe);

router.get("/", getuserreviwedata);

module.exports = router;


