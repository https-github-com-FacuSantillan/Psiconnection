const { Router } = require("express");

const router = Router();

router.use("/", (req, res) => {
  res.status(200).send("/");
});

module.exports = router;