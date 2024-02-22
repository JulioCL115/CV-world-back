const updateUserController = require('../../controllers/userController/updateUserController');

const updateUser = async (req, res) => {
    try {
        const propertiesToBeUpdated = req.body;

        const { userId } = req.params;

        console.log(userId, propertiesToBeUpdated);

        if(!userId) {
            return res.status(400).json({ error: "ID is required" });
        }

        if(Object.keys(propertiesToBeUpdated ).length === 0) {
            return res.status(400).json({ error: "The properties to be updated cannot be empty" });
        }

        if (propertiesToBeUpdated.email) {
            propertiesToBeUpdated.email = propertiesToBeUpdated.email.toLowerCase();
        }

        const userUpdated = await updateUserController(userId, propertiesToBeUpdated);

        if(!userUpdated) {
            throw new Error('Failed to update CV');
        }

        res.status(200).json({ message: "User updated successfully", userUpdated });

    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        } 
        return res.status(500).json({ error: error.message });
    }
};

module.exports = updateUser;
