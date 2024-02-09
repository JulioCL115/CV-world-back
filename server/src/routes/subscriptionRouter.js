const { Router } = require("express");
const subscriptionRouter = Router();
const getAllSubscriptions = require('../handlers/subscriptionHandler/getAllSubscriptions');

subscriptionRouter.get('/', getAllSubscriptions);

module.exports = subscriptionRouter;