const { Cv } = require('../../db');

const getAllCvsController = async (limit, offset) => {
    try {
        // Realiza la consulta a la base de datos para obtener los CVs paginados
        const allCvsFound = await Cv.findAndCountAll({
            where: { deleted: false },
            limit,
            offset
        });

        return allCvsFound.rows;
        
    } catch (error) {
        console.error('Error searching for all CVs:', error);
        throw error;    
    }
}

module.exports = getAllCvsController;