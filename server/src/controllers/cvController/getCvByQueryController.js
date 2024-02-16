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
        if(categories && !languages) {
            if(sort === "Más vistos") {
                const cvsFoundBySearchAndCategory = await Cv.findAndCountAll({
                    where: {
                        [Op.and]: [
                            {
                                deleted: false, categories
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
                    order: ['views', sort],
                    limit,
                    offset
                });
                return cvsFoundBySearchAndCategory.rows;
            }

            if(sort === "Más recientes") {
                const cvsFoundBySearchAndCategory = await Cv.findAndCountAll({
                    where: {
                        [Op.and]: [
                            {
                                deleted: false, categories
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
                return cvsFoundBySearchAndCategory.rows;
            }
        }

        if(!categories && languages) {
            if(sort === "Más vistos") {
                const cvsFoundBySearchAndlanguages = await Cv.findAndCountAll({
                    where: {
                        [Op.and]: [
                            {
                                deleted: false, languages
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
                    order: ['views', sort],
                    limit,
                    offset
                });
                return cvsFoundBySearchAndlanguages.rows;
            }

            if(sort === "Más recientes") {
                const cvsFoundBySearchAndlanguages = await Cv.findAndCountAll({
                    where: {
                        [Op.and]: [
                            {
                                deleted: false, languages
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
                return cvsFoundBySearchAndlanguages.rows;
            }
        }

        if(categories && languages) {
            if(sort === "Más vistos") {
                const cvsFoundBySearchAndCategoryAndLanguages = await Cv.findAndCountAll({
                    where: {
                        [Op.and]: [
                            {
                                deleted: false, categories, languages
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
                    order: ['views', sort],
                    limit,
                    offset
                });
                return cvsFoundBySearchAndCategoryAndLanguages.rows;
            }

            if(sort === "Más recientes") {
                const cvsFoundBySearchAndCategoryAndLanguages = await Cv.findAndCountAll({
                    where: {
                        [Op.and]: [
                            {
                                deleted: false, categories, languages
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
                return cvsFoundBySearchAndCategoryAndLanguages.rows;
            }
        }

        if(sort === "Más vistos") {
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
                order: ['views', sort],
                limit,
                offset
            });
            return cvsBySearchFound.rows;
        }

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
