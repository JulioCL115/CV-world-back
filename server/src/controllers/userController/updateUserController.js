const { User } = require('../../db');

const updateUserController = async (userId, propertiesToBeUpdated) => {
    try {
        const userFound = await User.findByPk(userId);

        if (!userFound) {
            const error = new Error("User not found for updating");
            error.statusCode = 404; 
            throw error;
        }

        const UserUpdated = await userFound.update(propertiesToBeUpdated);

        return UserUpdated;

    } catch (error) {
        console.error('Error updating User:', error);
        throw error;
    }
}

module.exports = updateUserController;

