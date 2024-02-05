const { Router } = require("express");
const router = Router();
const cvRouter = require('./cvRouter');
const userRouter = require("./userRouter");

router.use('/cv', cvRouter);

router.use('/user', userRouter);

module.exports = router;
