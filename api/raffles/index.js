const { Router } = require("express");
const addCompetitor = require("./raffle.controller.js");
const getWiners = require("./winers.controllers.js");

const router = Router();

router.post("/addCompetitor", addCompetitor);
router.get("/getWiners", getWiners);


module.exports = router;
