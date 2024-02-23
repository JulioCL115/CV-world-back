const getUserController = require('../../controllers/userController/getUserController'); 

const getUser = async (req, res) => {
    try {
        const { email } = req.query;

        if (!email) {
            return res.status(400).json({ error: 'Please provide a valid email in the request body' });
        }

        const user = await getUserController(email);

        if(!user || user.length === 0) {
            return res.status(404).json({ error: "No User found." });
        }

        res.status(200).json(user);
    } catch (error) {

        res.status(500).json({ error: error.message });
    }
};

module.exports = getUser;
