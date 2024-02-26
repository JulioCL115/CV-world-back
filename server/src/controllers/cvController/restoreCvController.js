const { Cv } = require('../../db');

const restoreCvController = async (cvId) => {
    try {
        const cvFound = await Cv.findByPk(cvId);

        if (!cvFound) {
            const error = new Error("Cv not found for restoration");
            error.statusCode = 404; 
            throw error;
        }

        if (!cvFound.deleted) {
            const error = new Error("Cv is not deleted. Cannot restore.");
            error.statusCode = 400; 
            throw error;
        }
        
        await cvFound.update({
            deleted: false 
        });

        return cvFound;

    } catch (error) {
        console.error('Error restoring Cv:', error);
        throw error;
    }
}

module.exports = restoreCvController;

