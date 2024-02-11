const loginUserController = require('../../controllers/userController/loginUserController');
const { loginUserSchema, ZodError } =  require('../../schemas/userSchema');

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        loginUserSchema.parse({ email, password });

        const loginCreated = await loginUserController(email, password);

        res.header('auth-token', loginCreated.token).json({
            message: 'Authenticated user',
                userId: loginCreated.userId ,
                token: loginCreated.token
        });

    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json(error.issues.map(issue => ({ error: issue.message })));
        }

        if (error.statusCode === 404) {
            return res.status(404).json({ error: error.message });
        } else if (error.statusCode === 401) {
            return res.status(401).json({ error: error.message });
        }

        return res.status(500).json({ error: error.message });
    }
};

module.exports = loginUser;