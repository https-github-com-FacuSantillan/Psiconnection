const { Router } = require("express");

// router importados 
const psicologosRoutes = require('./psicologosRoutes.js')


const router = Router();

// Configuarion de routers 
router.use('/psiconection', psicologosRoutes)

router.use("/", (req, res) => {
  res.status(200).send("/");
});

module.exports = router;
