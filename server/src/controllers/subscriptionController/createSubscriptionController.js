const { Subscription, User } = require("../../db");
const user = require("../../models/user");

const createSubscriptionController = async (name, price, included, notIncluded, userId) => {
    try {
   
        const subscriptionCreated = await Subscription.create({
            name,
            price,
            included,
            notIncluded,
        });

        const userFound = await User.findByPk(userId);

        if(!userFound) {
            return null;
        }

        // Asociar la suscripción con el usuario
        await userFound.setSubscription(subscriptionCreated);

        return subscriptionCreated;

    } catch (error) {
        console.error("Error creating subscription: ", error);
        throw error;
    }
};


module.exports = createSubscriptionController;
