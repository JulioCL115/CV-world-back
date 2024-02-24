const getUserByIdController = require('../../controllers/userController/getUserByIdController'); 

const getUserById = async (req, res) => {
    try {
        const { userId } = req.params;

        if (!userId) {
            return res.status(400).json({ error: 'Please provide a valid ID in the request params' });
        }

        const user = await getUserByIdController(userId);

        if(!user) {
            return res.status(404).json({ error: "No User found." });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getUserById;
