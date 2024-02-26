const restoreUserController = require('../../controllers/userController/restoreUserController');

const restoreUser = async (req, res) => {
    try {
        const { userId } = req.params;

        if(!userId) {
            return res.status(400).json({ error: "ID is required" });
        }

        const userRestored = await restoreUserController(userId);

        if(!userRestored) {
            throw new Error('Failed to restore User.');
        }

        res.status(200).json({ message: "User restored successfully", userRestored });

    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        } 
        return res.status(500).json({ error: error.message });
    }
};

module.exports = restoreUser;
