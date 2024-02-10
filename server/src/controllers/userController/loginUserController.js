const { User } = require('../../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

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

        const payload = { id: userFound.id }

        const options = { expiresIn: '1d' }

        const token = jwt.sign(
            payload, 
            process.env.JWT_SECRET,
            options
        );

        return { token, userId: userFound.id };
        
    } catch (error) {
        console.error('Error searching User:', error);
        throw error; 
    }
}

module.exports = loginUserController;