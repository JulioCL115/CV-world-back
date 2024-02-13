const { Cv } = require('../../db');

const updateCvController = async (cvId, propertiesToBeUpdated ) => {
    try {
        const cvFound = await Cv.findByPk(cvId);

        if (!cvFound) {
            throw new Error("CV not found");
        }

        const cvUpdated = await cvFound.update(propertiesToBeUpdated );

        return cvUpdated;

    } catch (error) {
        console.error('Error updating CV:', error);
        throw error;
    }
}

module.exports = updateCvController;

