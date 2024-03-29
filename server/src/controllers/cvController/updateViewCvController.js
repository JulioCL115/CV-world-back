const { Cv } = require('../../db');

const updateViewCvController = async (cvId) => {
    try {
        const cvFound = await Cv.findByPk(cvId);

        if (!cvFound) {
            const error = new Error("CV not found for updated views");
            error.statusCode = 404; 
            throw error;
        }

        if (cvFound.deleted) {
            const error = new Error("Cannot update a deleted CV");
            error.statusCode = 400;
            throw error;
        }

        cvFound.views += 1;
        
        await cvFound.save();

        return cvFound;
        
    } catch (error) {
        console.error('Error updating CV:', error);
        throw error;
    }
}

module.exports = updateViewCvController;
