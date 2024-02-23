const { User } = require('../../db');

const deleteUserController = async (email) => {
    try {
        const userFound = await User.findOne({
            where: { email }
        });

        if (!userFound) {
            const error = new Error("User not found for deleting");
            error.statusCode = 404; 
            throw error;
        }

        if (userFound.deleted) {
            const error = new Error("User is already deleted");
            error.statusCode = 400;
            throw error;
        }

        await userFound.update( 
            { deleted: true }, 
        );

        return userFound;

    } catch (error) {
        console.error('Error deleting User:', error);
        throw error;
    }
}

module.exports = deleteUserController;

