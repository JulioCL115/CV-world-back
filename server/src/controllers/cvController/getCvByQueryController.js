const { Cv } = require('../../db');
const { Op } = require('sequelize');

const getCvByQueryController = async (queryParam, page, pageSize) => {
    try {
        const offset = (page - 1) * pageSize;

        const cvsByQueryFound = await Cv.findAndCountAll({
            where: {
                [Op.or]: [
                    {
                        header: {
                            [Op.iLike]: `%${queryParam}%`
                        }
                    },
                    {
                        description: {
                            [Op.iLike]: `%${queryParam}%`
                        }
                    }   
                ]
            },
            limit: pageSize,
            offset: offset,
        });

        return cvsByQueryFound.rows;
        
    } catch (error) {
        console.error('Error searching for CVs by query:', error);
        throw error;       
    }
}

module.exports = getCvByQueryController;
