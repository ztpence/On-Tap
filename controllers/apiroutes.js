
var express = require("express");
var router = express.Router();
var db = require("../models");

// sends all data in JSON format
router.get("/api/all", function (req, res) {
  db.beerList.findAll({})
    .then(function (dbBeer) {
      res.json(dbBeer);
    });
});

// sends all beers by type and orders it by brewery name
router.get("/api/beers/:chosenBeer", function (req, res){
  // will use this variable to target data from AJAX request
  db.beerList.findAll({
    attributes: ["brewery_name", "beer_name"],
    where: {
      beer_type: req.params.chosenBeer
    },
    order: ["brewery_name"]
  })
  .then(function (data) {
    // beers = []
    // for (var i = 0; i < data.length; i++) {
    //   if (beers.indexOf(data[i].beer_name) === -1)
    //     beers.push(data[i].beer_name, data[i].brewery_name);
    //     console.log(data[i].beer_name);
    // }

    res.json(data);
  })
});

// Sends all breweries by city name and orders it by brwery name
router.get("/api/breweries/:city", function (req, res){
   // will use this variable to target data from AJAX request
  db.beerList.findAll({
    attributes: ["brewery_name"],
    where: {
      city_name: req.params.city
    },
    order: ["brewery_name"]
  })
  // filters through table content, elimnates duplictes, sends an array of final results
  .then(function (data) {
    breweries = []
    for (var i = 0; i < data.length; i++) {
      if (breweries.indexOf(data[i].brewery_name) === -1)
        breweries.push(data[i].brewery_name);
        console.log(data[i].brewery_name);
    }
    res.json(breweries);
  })
});


// creates new posting to database
router.post("/api/add", function(req, res) {
  db.beerList.create({
    brewery_name: "test",
    city_name: "test",
    beer_name: "test",
    beer_type:"test"
  })
    .then(function(data) {
      res.json(data);
    });
});
module.exports = router;