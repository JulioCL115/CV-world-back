const { Cv } = require('../../db');

const updateCvController = async (cvId, porpertiesToBeUpdated) => {
    try {

        const cvUpdated = await Cv.update( 
            porpertiesToBeUpdated,
            {
                where: { id: cvId}
            }
        );

        return cvUpdated;

    } catch (error) {
        console.error('Error updating CV:', error);
        throw error;
    }
}

module.exports = updateCvController;

