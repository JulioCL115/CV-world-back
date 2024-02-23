const { Cv, Category, Language,User,Subscription } = require('../../db');
const { Op,Sequelize } = require('sequelize');
const util = require('util');

const getCvByQueryController = async (search, categories, languages, limit, offset) => {
    try {

        console.log(search, categories, languages, limit, offset, 'PARAMS')

        const query = []

        const notDeleted = {
            deleted: false
        }

        query.push(notDeleted);

        if (search) {
            const likeSearch = {
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

            query.push(likeSearch);
        }

        if (categories) {
            const categoryFound = await Category.findAll({
                where: {
                    name: {
                        [Op.in]: categories
                    }
                }
            });

            const categoriesIds = categoryFound.map(category => category.id);

            const categoriesFilter = {
                CategoryId: {
                    [Op.in]: categoriesIds
                }
            }

            query.push(categoriesFilter);
        }

        if (languages) {
            console.log(languages, 'LANGUAGES')

            const languagesFound = await Language.findAll({
                where: {
                    name: {
                        [Op.in]: languages
                    }
                }
            })

            const languagesIds = languagesFound.map(language => language.id);

            const languageFilter = {
                LanguageId: {
                    [Op.in]: languagesIds
                }
            }

            query.push(languageFilter);
        }

        const completeQuery = {
            where: {
                [Op.and]: query,
            },
            limit,
            offset,
            order: [
                [
                    Sequelize.literal('"User->Subscription"."name" IS NOT NULL DESC, "User"."SubscriptionId" DESC'), // Ordenar por Subscription.name no nulo en orden descendente (premium primero)
                ],
                ['UserId', 'ASC'],
            ],
            include: [
                {
                    model: User,
                    attributes: ['SubscriptionId','name','photo'],
                    include: [
                        { model: Subscription, attributes: ['name', "price"] }
                    ]
                }
            ]
        };

        //print all statements in query for each
        console.log(util.inspect(completeQuery, { depth: null, colors: true }));

        const cvsByQueryFound = await Cv.findAndCountAll(completeQuery);
        if (cvsByQueryFound.count > 0) {
            console.log('Suscripción de los usuarios en los CVs encontrados:');
            cvsByQueryFound.rows.forEach(cv => {
                console.log(`CVId: ${cv.id}, UserId: ${cv.UserId}, Subscription: ${cv.User?.Subscription?.name}`);
            });
        }

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