const { Cv, User  } = require('../../db');

const getCvByIdController = async (id) => {

    try {
        const cvFound = await Cv.findOne({
            where: { id }
        });
    
        return cvFound;
    } catch (error) {
        console.error('Error searching for CV:', error);
        throw error; 
    }
}

module.exports = getCvByIdController;