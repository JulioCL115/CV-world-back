// const { Cv } = require('../../db');
// const { Op } = require('sequelize');

// // Función auxiliar para construir la cláusula where
// const buildWhereClause = (deleted, searchParams, filters) => ({
//   [Op.and]: [
//     { deleted },
//     ...Object.entries(filters).map(([key, value]) => ({ [key]: value })),
//     {
//       [Op.or]: [
//         { header: { [Op.iLike]: `%${searchParams}%` } },
//         { description: { [Op.iLike]: `%${searchParams}%` } }
//       ]
//     }
//   ]
// });

// // Función auxiliar para construir la cláusula order
// const buildOrderClause = (sortType) => [
//   sortType === 'Más vistos' ? 'views' : 'creationDate',
//   sortType
// ];

// const getCvByQueryController = async (sort, search, categories, languages, limit, offset) => {
//   try {
//     const filters = {};
//     if (categories) filters.categories = categories;
//     if (languages) filters.languages = languages;

//     const whereClause = buildWhereClause(false, search, filters);
//     const orderClause = buildOrderClause(sort);

//     const cvsFound = await Cv.findAndCountAll({
//         where: whereClause,
//         order: orderClause,
//         limit,
//         offset
//     });

//     return cvsFound.rows;
//   } catch (error) {
//     console.error('Error searching for CVs by query:', error);
//     throw error;
//   }
// };

// module.exports = getCvByQueryController;



const { Cv } = require('../../db');
const { Op } = require('sequelize');

const getCvByQueryController = async (sort, search, categories, languages, limit, offset) => {
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
            offset
        });

        if(sort === "Más recientes") {
            const cvsBySearchFound = await Cv.findAndCountAll({
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
                order: ['creationDate', sort],
                limit,
                offset
            });
            return cvsBySearchFound.rows;
        }

    } catch (error) {
        console.error('Error searching for CVs by query:', error);
        throw error;       
    }
}

module.exports = getCvByQueryController;
