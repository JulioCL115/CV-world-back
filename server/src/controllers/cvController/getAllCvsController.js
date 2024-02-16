const { Cv } = require('../../db');

const getAllCvsController = async (sort, categories, languages, limit, offset) => {
    try {

        if(categories && !languages) {

            if(sort === "Más vistos") {
                const cvsFoundByCategory = await Cv.findAndCountAll({
                    where: { deleted: false, categories },
                    order: ['views', sort],
                    limit,
                    offset
                });
    
                return cvsFoundByCategory.rows;
            }

            if(sort === "Más recientes") {
                const cvsFoundByCategory = await Cv.findAndCountAll({
                    where: { deleted: false, categories },
                    order: ['creationDate', sort],
                    limit,
                    offset
                });
    
                return cvsFoundByCategory.rows;
            }
        }

        if(!categories && languages) {

            if(sort === "Más vistos") {
                const cvsFoundBylanguages = await Cv.findAndCountAll({
                    where: { deleted: false, languages },
                    order: ['views', sort],
                    limit,
                    offset
                });
    
                return cvsFoundBylanguages.rows;
            }

            if(sort === "Más recientes") {
                const cvsFoundBylanguages = await Cv.findAndCountAll({
                    where: { deleted: false, languages },
                    order: ['creationDate', sort],
                    limit,
                    offset
                });
    
                return cvsFoundBylanguages.rows;
            }
        }

        if(categories && languages) {
            if(sort === "Más vistos") {
                const cvsFoundBycategoriesAndlanguages = await Cv.findAndCountAll({
                    where: { deleted: false, categories, languages },
                    order: ['views', sort],
                    limit,
                    offset
                });
    
                return cvsFoundBycategoriesAndlanguages.rows;
            }

            if(sort === "Más recientes") {
                const cvsFoundBycategoriesAndlanguages = await Cv.findAndCountAll({
                    where: { deleted: false, categories, languages },
                    order: ['creationDate', sort],
                    limit,
                    offset
                });
    
                return cvsFoundBycategoriesAndlanguages.rows;
            }
        }

        if(sort === "Más vistos") {
            const allCvsFound = await Cv.findAndCountAll({
                where: { deleted: false },
                order: ['views', sort],
                limit,
                offset
            });

            return allCvsFound.rows;
        }

        if(sort === "Más recientes") {
            const allCvsFound = await Cv.findAndCountAll({
                where: { deleted: false },
                order: ['creationDate', sort],
                limit,
                offset
            });

            return allCvsFound.rows;
        }

    } catch (error) {
        console.error('Error searching for all CVs:', error);
        throw error;    
    }
}

module.exports = getAllCvsController;