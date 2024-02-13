const { Cv } = require('../../db');

const deleteCvController = async (cvId) => {
    try {
        const cvFound = await Cv.findByPk(cvId);

        if (!cvFound) {
            throw new Error("CV not found for deleting");
        }

        const cvDeleted = await cvFound.update( 
            { deleted: true }, 
        );

        return cvDeleted;

    } catch (error) {
        console.error('Error deleting CV:', error);
        throw error;
    }
}

module.exports = deleteCvController;

