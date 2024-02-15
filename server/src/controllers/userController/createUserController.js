const { User } = require('../../db');
const bcrypt = require('bcrypt');

const createUserController = async (name, email, password, role) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name,
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
