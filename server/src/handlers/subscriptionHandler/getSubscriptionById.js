const getSubscriptionByIdController = require('../../controllers/subscriptionController/getSubscriptionByIdController');

const getSubscriptionById = async (req, res) => {
    try {
        const { subscriptionId } = req.params;

        if(!subscriptionId) {
            return res.status(400).json({ error: "ID is required" });
        }

        const subscriptionFound = await getSubscriptionByIdController(subscriptionId);

        if(!subscriptionFound) {
            return res.status(404).json({ error: 'Cv not found' });
        }

        res.status(200).json(subscriptionFound);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getSubscriptionById;
