const restoreSubscriptionController = require('../../controllers/subscriptionController/restoreSubscriptionController');

const restoreSubscription = async (req, res) => {
    try {
        const { subscriptionId } = req.params;

        if(!subscriptionId) {
            return res.status(400).json({ error: "ID is required" });
        }

        const subscriptionRestored = await restoreSubscriptionController(subscriptionId);

        if(!subscriptionRestored) {
            throw new Error('Failed to restore Subscription');
        }

        res.status(200).json({ message: "Subscription restored successfully", subscriptionRestored });

    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        } 
        return res.status(500).json({ error: error.message });
    }
};

module.exports = restoreSubscription;