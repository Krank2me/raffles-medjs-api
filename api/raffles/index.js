const { Router } = require("express");
const addCompetitor = require("./raffle.controller.js");

const router = Router();
router.post("/addCompetitor", addCompetitor);

module.exports = router;
