const updateSubscriptionController = require('../../controllers/subscriptionController/updateSubscriptionController');

const updateSubscription = async (req, res) => {
    try {
        const { name, price, included, notIncluded } = req.body;

        const { userId } = req.params;

        if(!userId) {
            return res.status(400).json({ error: "ID is required" });
        }

        const subscriptionUpdated = await updateSubscriptionController(userId, name, price, included, notIncluded);

        if(!subscriptionUpdated) {
            throw new Error('Failed to update Subscription');
        }

        res.status(200).json({ message: "Subscription updated successfully", subscriptionUpdated });

    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        } 
        return res.status(500).json({ error: error.message });
    
    }
};

module.exports = updateSubscription;
