const { Router } = require("express");
const subscriptionRouter = Router();
const getAllSubscriptions = require('../handlers/subscriptionHandler/getAllSubscriptions');
const createSubscription = require('../handlers/subscriptionHandler/createSubscription');
const updateSubscription = require('../handlers/subscriptionHandler/updateSubscription');
const verifyToken = require('../middlewares/verifyToken');

subscriptionRouter.get('/', getAllSubscriptions);

subscriptionRouter.get('/:subscriptionId', getAllSubscriptions);

subscriptionRouter.post('/:userId', verifyToken, createSubscription);

subscriptionRouter.put('/:userId', verifyToken, updateSubscription);

module.exports = subscriptionRouter;