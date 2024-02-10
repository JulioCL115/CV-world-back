const loginUserController = require('../../controllers/userController/loginUserController');
const { loginUserSchema, ZodError } =  require('../../schemas/userSchema');

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        loginUserSchema.parse({ email, password });

        const loginCreated = await loginUserController(email, password);

        res.setHeader('Authorization', `Bearer ${loginCreated.token}`).status(201).json({ 
            message: 'Authenticated user',
            userId: loginCreated.userId 
        });

    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json(error.issues.map(issue => ({ error: issue.message })));
        }

        return res.status(500).json({ error: error.message });
    }
};

module.exports = loginUser;