const { Router } = require("express");
const router = Router();
const cvRouter = require('./cvRouter');
const userRouter = require('./userRouter');
const commentRouter = require('./commentRouter');
const categoryRouter = require('./categoryRouter');
const languageRouter = require('./languageRouter');
const subscriptionRouter = require('./subscriptionRouter');

router.use('/cv', cvRouter);

router.use('/user', userRouter);

router.use('/comment', commentRouter);

router.use('/category', categoryRouter);

router.use('/language', languageRouter);

router.use('/subscription', subscriptionRouter);

module.exports = router;
