var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.create([
    "burger_name"
  ], [
    req.body.name
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var eaten = "id = " + req.params.id;

  console.log("devoured", eaten);

  burger.update({
    devoured: req.body.devoured
  }, eaten, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;