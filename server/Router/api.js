const router = require("express").Router();
const apiRouter = require("../Controller/control");

router.get("/", apiRouter.homeControl);
router.post("/userdeta", apiRouter.userDataControl);
router.get("/returndata", apiRouter.returnDataControl);
router.get("/update/:uid", apiRouter.updateControl);
router.post("/updatednewvalue/:nid", apiRouter.updatedNewControl)

module.exports = router;
