const getAllSubscriptionsController = require('../../controllers/subscriptionController/getAllSubscriptionsController');

const getAllSubscriptions = async (req, res) => {
    try {
        const allSubscriptions = await getAllSubscriptionsController();

        if(!allSubscriptions || allSubscriptions.length === 0) {
            return res.status(404).json({ error: "No subscriptions found" });
        }

        res.status(200).json(allSubscriptions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllSubscriptions;
