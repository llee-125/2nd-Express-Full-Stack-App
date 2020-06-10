const express = require("express");
const router = express.Router();
const path = require("path");

router.get("./api", (req, res) => {
  console.log("API has been hit");
  res.send("Howdy!");
});

module.exports = router;
