const { Router } = require("express");
const router = Router();
const cvRouter = require('./cvRouter');
const userRouter = require("./userRouter");
const commentRouter = require("./commentRouter");

router.use('/cv', cvRouter);
router.use('/', userRouter);
router.use('/user', userRouter);

router.use('/comment', commentRouter)

module.exports = router;
