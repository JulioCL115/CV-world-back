const { User } = require('../../db');
// const bcrypt = require('bcrypt');


const loginUserController = async (email, password) => {
    try {
        
        const userFound = await User.findOne({
            where: { email, password }
        });

        if (!userFound) {
            throw new Error('Usuario no encontrado');
        }

        // const isPasswordValid = await bcrypt.compare(password, userFound.password);

        // if (!isPasswordValid) {
        //     throw new Error('Contraseña incorrecta');
        // }

        return userFound;
        
    } catch (error) {
        console.error('Error searching User:', error);
        throw error; 
    }
}

module.exports = loginUserController;