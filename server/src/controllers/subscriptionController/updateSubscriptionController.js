const { User } = require('../../db');

const updateSubscriptionController = async (userId, name, price, included, notIncluded) => {
    try {
        const userFound = await User.findByPk(userId);

        if (!userFound) {
            const error = new Error("User not found for updating subscription");
            error.statusCode = 404; 
            throw error;
        }

        const userSubscription = await userFound.getSubscription();

        if (!userSubscription) {
            const error = new Error("Subscription not found for user");
            error.statusCode = 404; 
            throw error;
        }

        const subscriptionUpdated = await userSubscription.update({
            name: name,
            price: price,
            included: included,
            notIncluded: notIncluded
        });

        return subscriptionUpdated;

    } catch (error) {
        console.error('Error updating subscription:', error);
        throw error;
    }
}

module.exports = updateSubscriptionController;

