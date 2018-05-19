var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/api", function(req, res) {
    db.beerList.findAll({})
      .then(function(dbBeer) {
        res.json(dbBeer);
      });
  });

module.exports = router;