const { Router } = require("express");
const subscriptionRouter = Router();
const getAllSubscriptions = require('../handlers/subscriptionHandler/getAllSubscriptions');
const createSubscription = require('../handlers/subscriptionHandler/createSubscription');
const verifyToken = require('../middlewares/verifyToken');

subscriptionRouter.get('/', getAllSubscriptions);

subscriptionRouter.post('/:userId', verifyToken, createSubscription);

module.exports = subscriptionRouter;