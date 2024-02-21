const { User, Subscription } = require('../../db');
const bcrypt = require('bcrypt');

const updateUserController = async (userId, propertiesToBeUpdated) => {
    try {
        const userFound = await User.findByPk(userId);

        if (!userFound) {
            const error = new Error("User not found for updating");
            error.statusCode = 404; 
            throw error;
        }

        if (propertiesToBeUpdated.password) {
            const hashedPassword = await bcrypt.hash(propertiesToBeUpdated.password, 10);
            propertiesToBeUpdated.password = hashedPassword;
        }

        if (propertiesToBeUpdated.subscriptionId) {
            const subscription = await Subscription.findByPk(propertiesToBeUpdated.subscriptionId);

            if (!subscription) {
                throw new Error("Subscription not found");
            }

            // Actualiza la relación entre el usuario y la suscripción
            await userFound.setSubscription(subscription);
        }

        const UserUpdated = await userFound.update(propertiesToBeUpdated);

        return UserUpdated;

    } catch (error) {
        console.error('Error updating User:', error);
        throw error;
    }
}

module.exports = updateUserController;

