const deleteUserController = require('../../controllers/userController/deleteUserController');

const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;

        const userDeleted = await deleteUserController(userId);

        if(!userDeleted) {
            throw new Error('Failed to delete User');
        }        
        
        res.status(200).json({
            message: "User deleted successfully",
            userDeleted 
        });

    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        } 
        return res.status(500).json({ error: error.message });
    }
};

module.exports = deleteUser;
