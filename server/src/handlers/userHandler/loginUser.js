const loginUserController = require('../../controllers/userController/loginUserController');
const { loginUserSchema, ZodError } =  require('../../schemas/userSchema');

const loginUserHandler = async (req, res) => {
    try {
        const { email, password } = req.body;

        loginUserSchema.parse({ email, password });

        const loginCreated = await loginUserController(email, password);

        res.status(201).json(loginCreated);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {loginUserHandler}