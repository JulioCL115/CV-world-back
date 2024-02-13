const createUserController = require("../../controllers/userController/createUserController");
const { registerUserSchema } = require('../../schemas/userSchema');

const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // const { error } = registerUserSchema.validate(req.body);

        // if(error) {
        //     return res.status(400).json({ error: error.details[0].message });
        // }

        const newUser = await createUserController(
            name,
            email,
            password,
            role
        );

        res.status(201).json(newUser);
    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        }

        return res.status(500).json({ error: error.message });
    }
};

module.exports = createUser;
