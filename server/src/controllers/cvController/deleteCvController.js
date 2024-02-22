const { Cv } = require('../../db');
const cv = require('../../models/cv');

const deleteCvController = async (cvId) => {
    try {
        console.log(cvId);

        const cvFound = await Cv.findByPk(cvId);

        if (!cvFound) {
            const error = new Error("CV not found for deletion");
            error.statusCode = 404;
            throw error;
        }

        cvFound.deleted = true;

        const result = await cvFound.save();

        return result;

    } catch (error) {
        console.error('Error deleting CV:', error);
        throw error;
    }
}

module.exports = deleteCvController;

