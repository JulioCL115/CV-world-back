const createSubscriptionController = require('../../controllers/subscriptionController/createSubscriptionController');

const createSubscription = async (req, res) => {
    try {
        const { name, price, included, notIncluded } = req.body;

        const subscriptionCreated = await createSubscriptionController(name, price, included, notIncluded);

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