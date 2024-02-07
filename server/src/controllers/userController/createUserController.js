const { User } = require("../../db");

const createUserController = async (name, email, password, phoneNumber, role) => {
    try {
        const newUser = await User.create({
            name,
            email,
            password,
            phoneNumber,
            role,
        });

        return newUser;
    } catch (error) {
        console.error("Error registering a user:", error);
        throw error;
    }
};

module.exports = createUserController;
