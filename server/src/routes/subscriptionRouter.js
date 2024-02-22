const { Router } = require("express");
const subscriptionRouter = Router();
const getAllSubscriptions = require('../handlers/subscriptionHandler/getAllSubscriptions');
const createSubscription = require('../handlers/subscriptionHandler/createSubscription');
const updateSubscription = require('../handlers/subscriptionHandler/updateSubscription');
const getSubscriptionById = require('../handlers/subscriptionHandler/getSubscriptionById');
const deleteSubscription = require('../handlers/subscriptionHandler/deleteSubscription')
const verifyToken = require('../middlewares/verifyToken');

subscriptionRouter.get('/', getAllSubscriptions);

subscriptionRouter.get('/:subscriptionId', getSubscriptionById);

subscriptionRouter.post('/:userId', verifyToken, createSubscription);

subscriptionRouter.put('/:userId', verifyToken, updateSubscription);

subscriptionRouter.put('/delete/:subscriptionId', deleteSubscription);

module.exports = subscriptionRouter;