const { Cv } = require('../../db');

const getAllCvsController = async (limit, offset) => {
    try {
        const allCvsFound = await Cv.findAndCountAll({
            where: { deleted: false },
            
        });

        console.log("controller",allCvsFound.count)

        return {
            totalCvs: allCvsFound.count, 
            cvs: allCvsFound.rows  
        }

    } catch (error) {
        console.error('Error searching for all CVs:', error);
        throw error;    
    }
}

module.exports = getAllCvsController;