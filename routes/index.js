const router = require("express").Router();
const battle= require('./battle');
const model = require("../models");

router.get("/", (req, res) => {
  // model.bos
  //   req.session
  res.render("./home/index.ejs", { errors: null });

});


router.use('/battles2',battle)

module.exports = router;
