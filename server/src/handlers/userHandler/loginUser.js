const loginUserController = require('../../controllers/userController/loginUserController');
const { loginUserSchema } =  require('../../schemas/userSchema');

const loginUserHandler = async (req, res) => {
    try {
        const { email, password } = req.body;

        const { error } = loginUserSchema.validate(req.body);

        if(error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const loginCreated = await loginUserController(email, password);

        res.header('auth-token', loginCreated.token).json({
            message: 'Authenticated user',
            token: loginCreated.token,
            user: loginCreated.userFoundFiltered,
        });

    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        return res.status(500).json({ error: error.message });
    }
}

module.exports = loginUserHandler