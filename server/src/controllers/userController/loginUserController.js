const { User } = require('../../db');
// const bcrypt = require('bcrypt');

const loginUserController = async (email, password) => {
    try {
        
        const userFound = await User.findOne({
            where: { email, password }
        });

        if (!userFound) {
            throw new Error('User not found');
        }

        return userFound;
        
    } catch (error) {
        console.error('Error searching User:', error);
        throw error; 
    }
}

module.exports = loginUserController;