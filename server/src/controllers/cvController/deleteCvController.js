const { Cv } = require('../../db');

const deleteCvController = async (cvId) => {
    try {

        const cvDeleted = await Cv.destroy({
            where: { id: cvId}
        });

        return cvDeleted;

    } catch (error) {
        console.error('Error deleting CV:', error);
        throw error;
    }
}

module.exports = deleteCvController;

