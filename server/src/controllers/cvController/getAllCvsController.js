const { Cv } = require('../../db');

const getAllCvsController = async (page = 1, pageSize = 6) => {
    try {
        const offset = (page - 1) * pageSize;

        // Realiza la consulta a la base de datos para obtener los CVs paginados
        const allCvsFound = await Cv.findAndCountAll({
            limit: pageSize,
            offset: offset,
        });

        return allCvsFound.rows;
        
    } catch (error) {
        throw new Error(`Error al obtener todos los CVs: ${error.message}`);
    }

}

module.exports = getAllCvsController;