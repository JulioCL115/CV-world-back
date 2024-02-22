const { Router } = require("express");
const subscriptionRouter = Router();
const getAllSubscriptions = require('../handlers/subscriptionHandler/getAllSubscriptions');
const createSubscription = require('../handlers/subscriptionHandler/createSubscription');
const updateSubscription = require('../handlers/subscriptionHandler/updateSubscription');
const getSubscriptionById = require('../handlers/subscriptionHandler/getSubscriptionById');
const deleteSubscription = require('../handlers/subscriptionHandler/deleteSubscription');
const verifyToken = require('../middlewares/verifyToken');

subscriptionRouter.post('/', verifyToken, createSubscription);

subscriptionRouter.get('/', getAllSubscriptions);

subscriptionRouter.get('/:subscriptionId', getSubscriptionById);

subscriptionRouter.put('/:userId', verifyToken, updateSubscription);

subscriptionRouter.put('/delete/:subscriptionId', deleteSubscription);

module.exports = subscriptionRouter;