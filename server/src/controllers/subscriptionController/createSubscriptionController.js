const { Subscription } = require("../../db");

const createSubscriptionController = async (name, price, included, notIncluded) => {
    try {
        const existingSubscription = await Subscription.findOne(
            { where: { name, deleted: false } }
        );

        if (existingSubscription) {
            const error = new Error('Subscription already exists');
            error.statusCode = 409; 
            throw error;
        }

        const subscriptionCreated = await Subscription.create({
            name,
            price,
            included,
            notIncluded,
        });

        return subscriptionCreated;

    } catch (error) {
        console.error("Error creating subscription: ", error);
        throw error;
    }
};


module.exports = createSubscriptionController;
