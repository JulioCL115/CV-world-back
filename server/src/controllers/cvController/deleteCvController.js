const { Cv } = require('../../db');

const deleteCvController = async (cvId) => {
    try {
        const cvFound = await Cv.findByPk(cvId);

        if (!cvFound) {
            const error = new Error("CV not found for deletion");
            error.statusCode = 404; 
            throw error;
        }

        if (cvFound.deleted) {
            const error = new Error("CV already deleted");
            error.statusCode = 400;
            throw error;
        }
    
        await cvFound.update( 
            { deleted: true }
        );

        return cvFound;

    } catch (error) {
        console.error('Error deleting CV:', error);
        throw error;
    }
}

module.exports = deleteCvController;


