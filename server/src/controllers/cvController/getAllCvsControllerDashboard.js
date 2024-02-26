const { Cv, Category, Language, User, Subscription } = require('../../db');

const getAllCvsControllerDashboard = async () => {
    try {
        const allCvsFound = await Cv.findAll({
            include: [
                {
                    model: User,
                    include: [
                        { model: Subscription, attributes: ['price', 'name'] }
                    ],
                    attributes: ['name', 'photo']
                },
                {
                    model: Category,
                    attributes: ['name']
                },
                {
                    model: Language,
                    attributes: ['name']
                }
            ],
        });

        return allCvsFound;
    } catch (error) {
        console.error('Error searching for CVs by query:', error);
        throw error;
    }
}

module.exports = getAllCvsControllerDashboard;
