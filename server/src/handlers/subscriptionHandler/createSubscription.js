const createSubscriptionController = require('../../controllers/subscriptionController/createSubscriptionController');

const createSubscription = async (req, res) => {
    try {
        const { name, price, included, notIncluded } = req.body;

        const { userId } = req.params;

        console.log('ID' + userId);

        if (!userId) {
            return res.status(400).json({ error: 'Please provide a valid ID in the request parameters' })
        }

        const subscriptionCreated = await createSubscriptionController(name, price, included, notIncluded, userId);

        if (!subscriptionCreated) {
            return res.status(404).json({ error: 'Subscription not found' });
        }

        res.status(201).json(subscriptionCreated);
        
    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        }

        return res.status(500).json({ error: error.message });
    }
}

module.exports = createSubscription;