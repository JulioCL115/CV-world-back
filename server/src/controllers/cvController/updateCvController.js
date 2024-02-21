const { Cv, Category, Language } = require('../../db');

const updateCvController = async (cvId, propertiesToBeUpdated ) => {
    try {
        const cvFound = await Cv.findByPk(cvId, {
            include: [Category, Language]
        });

        if (!cvFound) {
            const error = new Error("CV not found for updating");
            error.statusCode = 404; 
            throw error;
        }

        const cvUpdated = await cvFound.update(propertiesToBeUpdated);

        return cvUpdated;
        
    } catch (error) {
        console.error('Error updating CV:', error);
        throw error;
    }
}

module.exports = updateCvController;

