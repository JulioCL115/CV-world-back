const getAllSubscriptionsControllerDashboard = require('../../controllers/subscriptionController/getAllSubscriptionsControllerDashboard');

const getAllSubscriptionsDashboard = async (req, res) => {
    try {
        const allSubscriptions = await getAllSubscriptionsControllerDashboard();

        if(!allSubscriptions || allSubscriptions.length === 0) {
            return res.status(404).json({ error: "No subscriptions found" });
        }

        res.status(200).json(allSubscriptions);
    } catch (error) {

        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllSubscriptionsDashboard;
