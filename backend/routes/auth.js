const express = require("express");
const router = express.Router();

// now we use router instead of app cz we are using mongoose
router.get("/", (req, res) => {
  const obj = {
    a: "this",
    number: 312,
  };
  res.json(obj);
});

module.exports = router;
