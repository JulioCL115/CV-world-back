const deleteSubscriptionController = require('../../controllers/subscriptionController/deleteSubscriptionController');

const deleteSubscription = async (req, res) => {
    try {
        const { subscriptionId } = req.params;

        if(!subscriptionId) {
            return res.status(400).json({ error: "ID is required" });
        }

        const subscriptionDeleted = await deleteSubscriptionController(subscriptionId);

        if(!subscriptionDeleted) {
            throw new Error('Failed to delete Subscription');
        }

        res.status(200).json({ message: "Subscription delete successfully", subscriptionDeleted });

    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        } 
        return res.status(500).json({ error: error.message });
    
    }
};

module.exports = deleteSubscription; 