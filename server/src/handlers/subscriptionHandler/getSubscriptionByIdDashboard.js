const getSubscriptionByIdControllerDashboard = require('../../controllers/subscriptionController/getSubscriptionByIdControllerDashboard');

const getSubscriptionByIdDashboard = async (req, res) => {
    try {
        const { subscriptionId } = req.params;

        if(!subscriptionId) {
            return res.status(400).json({ error: "ID is required" });
        }

        const subscriptionFound = await getSubscriptionByIdControllerDashboard(subscriptionId);

        if(!subscriptionFound) {
            return res.status(404).json({ error: 'Subscription not found' });
        }

        res.status(200).json(subscriptionFound);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getSubscriptionByIdDashboard;
