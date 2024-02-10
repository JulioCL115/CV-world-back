const { User } = require('../../db');
const bcrypt = require('bcrypt');

const createUserController = async (userName, email, password, role) => {
    try {

        const userFound = await User.findOne({
            where: { email }
        });

        if(userFound) {
            throw new Error('The email address is already in use. Please try with another email');
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
