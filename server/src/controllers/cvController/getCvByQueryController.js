const { Cv, sequelize  } = require('../../db');
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
                    },
                    sequelize.literal(`"Cv"."experience"->>'jobPosition' ILIKE '%${queryParam}%'`),
                    sequelize.literal(`"Cv"."experience"->>'description' ILIKE '%${queryParam}%'`),
                    sequelize.literal(`"Cv"."education"->>'institution: ' ILIKE '%${queryParam}%'`),
                    sequelize.literal(`"Cv"."education"->>'title' ILIKE '%${queryParam}%'`),
                    sequelize.literal(`"Cv"."education"->>'description' ILIKE '%${queryParam}%'`),
                ]
            },
            limit: pageSize,
            offset: offset,
        });

        return cvsByQueryFound.rows;
        
    } catch (error) {
        throw new Error(`Error al obtener todos los CVs: ${error.message}`);
    }
}

module.exports = getCvByQueryController;