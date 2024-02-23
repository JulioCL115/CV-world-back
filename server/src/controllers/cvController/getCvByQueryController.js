const { Cv, Category, Language, User, Subscription } = require('../../db');
const { Op } = require('sequelize');

const getCvByQueryController = async (search, categories, languages, limit, offset, sortByViews, sortByDate) => {
    try {
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
                [Op.and]: query
            },
            limit,
            offset,
            include: [
                {
                    model: User,
                    include: [
                        { model: Subscription, attributes: ['price', 'name'] }
                    ],
                    attributes: ['name', 'photo']
                }
            ],
            order: [
                [User , Subscription, 'price', 'DESC'] // Sort by Subscription name in ascending order
            ]
        }

        if (sortByDate) {
            completeQuery.order.push(['creationDate', 'DESC']);
        }

        if (sortByViews) {
            completeQuery.order.push(['views', 'DESC']);
        }
        
        const cvsByQueryFound = await Cv.findAndCountAll(completeQuery);

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
