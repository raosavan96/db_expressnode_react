const router = require("express").Router();
const apiRouter = require("../Controller/control");

router.get("/", apiRouter.homeControl);
router.post("/userdeta", apiRouter.userDataControl);
router.get("/returndata", apiRouter.returnDataControl);

module.exports = router;
