const { User } = require('../../db');
const bcrypt = require('bcrypt');

const loginUserController = async (email, password) => {
    try {
        
        const userFound = await User.findOne({
            where: { email }
        });

        if (!userFound) {
            throw new Error('User not found');
        }

        // Comparar la contraseña proporcionada con la contraseña almacenada en la base de datos
        const passwordMatch = await bcrypt.compare(password, userFound.password);

        if (!passwordMatch) {
            throw new Error('Incorrect password');
        }

        return userFound;
        
    } catch (error) {
        console.error('Error searching User:', error);
        throw error; 
    }
}

module.exports = loginUserController;