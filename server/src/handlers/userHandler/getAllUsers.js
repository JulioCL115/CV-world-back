const getAllUsersController = require('../../controllers/userController/getAllUsersController');

const getAllUsers = async (req, res) => {
    try {
        const usersFound = await getAllUsersController();

        if(!usersFound || usersFound.length === 0) {
            return res.status(404).json({ error: "No User found." });
        }

        res.status(200).json(usersFound);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllUsers;
