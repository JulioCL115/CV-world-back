const loginUserController = require('../../controllers/userController/loginUserController');
const { loginUserSchema } =  require('../../schemas/userSchema');

const loginUser = async (req, res) => {
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
        if (error.statusCode === 404) {
            return res.status(404).json({ error: error.message });
        } else if (error.statusCode === 401) {
            return res.status(401).json({ error: error.message });
        }

        return res.status(500).json({ error: error.message });
    }
};

module.exports = loginUser;