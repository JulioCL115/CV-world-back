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

        const UserDeleted = await userFound.update( 
            { deleted: true }, 
        );

        return UserDeleted;

    } catch (error) {
        console.error('Error deleting User:', error);
        throw error;
    }
}

module.exports = deleteUserController;

