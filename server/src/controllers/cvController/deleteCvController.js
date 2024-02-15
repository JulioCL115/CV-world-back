const { Cv } = require('../../db');

const deleteCvController = async (cvId) => {
    try {
        const cvFound = await Cv.findByPk(cvId);

        if (!cvFound) {
            const error = new Error("CV not found for deletion");
            error.statusCode = 404; 
            throw error;
        }

        const cvDeleted= await cvFound.update( 
            { deleted: true }, 
        );

        return cvDeleted;

    } catch (error) {
        console.error('Error deleting CV:', error);
        throw error;
    }
}

module.exports = deleteCvController;

