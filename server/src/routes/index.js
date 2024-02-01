const { Router } = require("express");

const { loginRouter, registerRouter } = require("./auth.router");

const router = Router();

router.use("/register", registerRouter);
router.use("/login", loginRouter);

module.exports = router;
