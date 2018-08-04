const router = require("express").Router();
const model = require("../models");
const BattleController=require('../controllers/battle');

router.get("/", BattleController.findAllSummon);

module.exports = router;
