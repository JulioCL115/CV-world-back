const { Cv } = require("../../db");

const postCvController = async (name, image = '', header, description, experience, education, contact, skils, speakingLanguages, otherInterests, creationDate = '2024-02-10', views = 0, userId, categoryId, lenguajeId) => {
    try {
        const [newCv, created] = await Cv.findOrCreate({
            where: {
                name, 
                image, 
                header, 
                description, 
                experience,
                education, 
                contact, 
                skils, 
                speakingLanguages, 
                otherInterests, 
                creationDate, 
                views,
                UserId: userId,
                CategoryId: categoryId,
                LenguajeId: lenguajeId
            },
        });

        return newCv;
    } catch (error) {
        console.error("Error creating CV:", error);
        throw error;
    }
};

module.exports = postCvController;
