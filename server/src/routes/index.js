const { Router } = require("express");
const router = Router();
const cvRouter = require('./cvRouter');
const userRouter = require('./userRouter');
const commentRouter = require('./commentRouter');
const categoryRouter = require('./categoryRouter');
const languageRouter = require('./languageRouter');
const subscriptionRouter = require('./subscriptionRouter');
const cloudinaryRouter = require('./cloudinaryRouter');

router.use('/cv', cvRouter);

router.use('/user', userRouter);

router.use('/comment', commentRouter);

router.use('/category', categoryRouter);

router.use('/language', languageRouter);

router.use('/subscription', subscriptionRouter);

// router.use("/cloudinary", cloudinaryRouter);

module.exports = router;
