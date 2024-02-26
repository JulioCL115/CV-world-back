const { User } = require('../../db');

const restoreUserController = async (userId) => {
    try {
        const userFound = await User.findByPk(userId);

        if (!userFound) {
            const error = new Error("User not found for restoration");
            error.statusCode = 404; 
            throw error;
        }

        if (!userFound.deleted) {
            const error = new Error("User is not deleted. Cannot restore.");
            error.statusCode = 400; 
            throw error;
        }
        
        await userFound.update({
            deleted: false 
        });

        return userFound;

    } catch (error) {
        console.error('Error restoring User:', error);
        throw error;
    }
}

module.exports = restoreUserController;

