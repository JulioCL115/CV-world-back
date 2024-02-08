const createUserController = require("../../controllers/userController/createUserController");
const { registerUserSchema, ZodError } = require('../../schemas/userSchema');

const createUser = async (req, res) => {
    try {
        const { name, email, password, phoneNumber, role } = req.body;

        registerUserSchema.parse({ name, email, password, phoneNumber });

        const newUser = await createUserController(
            name,
            email,
            password,
            phoneNumber,
            role
        );

        res.status(201).json(newUser);
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json(error.issues.map(issue => ({ error: issue.message })));
        }
        return res.status(500).json({ error: error.message });
    }
};

module.exports = createUser;
