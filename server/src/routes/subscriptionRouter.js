const { Router } = require("express");
const subscriptionRouter = Router();
const getAllSubscriptions = require('../handlers/subscriptionHandler/getAllSubscriptions');
const createSubscription = require('../handlers/subscriptionHandler/createSubscription');

subscriptionRouter.get('/', getAllSubscriptions);

subscriptionRouter.post('/:userId', createSubscription);

module.exports = subscriptionRouter;