const express = require("express");
//sudo npm install -g nodemon
const breads = express.Router();
const Bread = require("../models/bread.js");

// INDEX
breads.get("/", (req, res) => {
  res.render("Index", {
    breads: Bread,
  });
  // res.send(Bread)
});
// SHOW
breads.get("/:arrayIndex", (req, res) => {
  res.send(Bread[req.params.arrayIndex]);
});
module.exports = breads;
