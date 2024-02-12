const { User } = require('../../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUserController = async (email, password) => {
    try {
        
        const userFound = await User.findOne({
            where: { email }
        });

        if (!userFound) {
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }

        // Comparar la contraseña proporcionada con la contraseña almacenada en la base de datos
        const passwordMatch = await bcrypt.compare(password, userFound.password);

        if (!passwordMatch) {
            const error = new Error('Incorrect password');
            error.statusCode = 401; 
            throw error;
        }

        const payload = { id: userFound.id, userName: userFound.userName }

        const options = { expiresIn: '1d' }

        const token = jwt.sign(
            payload, 
            process.env.JWT_SECRET,
            options
        );

        return { token, userId: userFound.id };
        
    } catch (error) {
        console.error('Error logging user:', error);
        throw error; 
    }
}

module.exports = loginUserController;