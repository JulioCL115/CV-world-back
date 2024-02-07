const createUserController = require("../../controllers/userController/createUserController");

const createUser = async (req, res) => {
    const { name, email, password, phoneNumber, role } = req.body;
    try {
        const newUser = await createUserController(
            name,
            email,
            password,
            phoneNumber,
            role
        );

        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = createUser;
