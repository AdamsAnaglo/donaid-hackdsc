const express = require("express");
const router = express.Router();

router.get("/some-endpoint", (req, res) => {
  res.send({ someKey: "someValue for authenticated." });
});

module.exports = router;
