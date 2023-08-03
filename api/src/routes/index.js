const { Router } = require("express");

// router importados 
const psicologosRoutes = require('./psicologosRoutes.js')
const userRoutes = require('./userRoutes.js')

const router = Router();

// Configuarion de routers 
router.use('/psiconection', psicologosRoutes)
router.use('/psiconection', userRoutes)


router.use("/", (req, res) => {
  res.status(200).send("/");
});

module.exports = router;
