const { Router } = require("express");
const subscriptionRouter = Router();
const getAllSubscriptions = require('../handlers/subscriptionHandler/getAllSubscriptions');
const createSubscription = require('../handlers/subscriptionHandler/createSubscription');
const updateSubscription = require('../handlers/subscriptionHandler/updateSubscription');
const getSubscriptionById = require('../handlers/subscriptionHandler/getSubscriptionById');
const deleteSubscription = require('../handlers/subscriptionHandler/deleteSubscription');
const getAllSubscriptionsDashboard = require('../handlers/subscriptionHandler/getAllSubscriptionsDashboard');
const getSubscriptionByIdDashboard = require('../handlers/subscriptionHandler/getSubscriptionByIdDashboard');
const restoreSubscription = require('../handlers/subscriptionHandler/restoreSubscription');
const verifyToken = require('../middlewares/verifyToken');

subscriptionRouter.get('/dashboard', verifyToken, getAllSubscriptionsDashboard);

subscriptionRouter.get('/dashboard/:subscriptionId', verifyToken, getSubscriptionByIdDashboard);

subscriptionRouter.put('/delete/:subscriptionId', verifyToken, deleteSubscription);

subscriptionRouter.put('/restore/:subscriptionId', verifyToken, restoreSubscription);

subscriptionRouter.post('/', verifyToken, createSubscription);

subscriptionRouter.put('/:subscriptionId', verifyToken, updateSubscription);

subscriptionRouter.get('/:subscriptionId', getSubscriptionById);

subscriptionRouter.get('/', getAllSubscriptions);

module.exports = subscriptionRouter;