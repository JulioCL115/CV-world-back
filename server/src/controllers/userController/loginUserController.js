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

        const payload = { email: userFound.email }

        const options = { expiresIn: '1d' }

        const token = jwt.sign(
            payload, 
            process.env.JWT_SECRET,
            options
        );

        const cookieOption = {
            expires: new Date(Date.now() + (24 * 60 * 60 * 1000)), // Expire en 1 día
            path: '/'
        }

        return { token, cookieOption, userId: userFound.id};
        
    } catch (error) {
        console.error('Error searching User:', error);
        throw error; 
    }
}

module.exports = loginUserController;