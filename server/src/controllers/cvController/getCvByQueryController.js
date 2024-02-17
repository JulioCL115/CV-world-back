const { Cv } = require('../../db');
const { Op } = require('sequelize');

const getCvByQueryController = async (search, limit, offset) => {
    try {
        const cvsByQueryFound = await Cv.findAndCountAll({
            where: {
                [Op.and]: [
                    {
                        deleted: false
                    },
                    {
                        [Op.or]: [
                            {
                                header: {
                                    [Op.iLike]: `%${search}%`
                                }
                            },
                            {
                                description: {
                                    [Op.iLike]: `%${search}%`
                                }
                            }   
                        ]
                    }
                ]
            },
            limit,
            offset,
        });

        return {
            totalCvs: cvsByQueryFound.count,
            cvs: cvsByQueryFound.rows
        };
        
    } catch (error) {
        console.error('Error searching for CVs by query:', error);
        throw error;       
    }
}

module.exports = getCvByQueryController;