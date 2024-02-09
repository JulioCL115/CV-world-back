const { User } = require("../../db");

const createUserController = async (name, email, password, role) => {
    try {
        const newUser = await User.create({
            name,
            email,
            password,
            role
        });

        return newUser;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};

module.exports = createUserController;
