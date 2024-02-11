const { User } = require('../../db');
const bcrypt = require('bcrypt');

const createUserController = async (userName, email, password, role) => {
    try {

        const userFound = await User.findOne({
            where: { email }
        });

        if(userFound) {
            const error = new Error('Email address already in use. Please try with another email.');
            error.statusCode = 409; 
            throw error;
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            userName,
            email,
            password: hashPassword,
            role
        });

        return newUser;

    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};

module.exports = createUserController;
