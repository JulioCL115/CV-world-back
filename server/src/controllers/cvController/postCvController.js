const { Cv } = require("../../db");

const postCvController = async (name, image = '', header, description, experience, education, contact, skils, speakingLanguages, otherInterests,  views = 0, userId, categoryId, lenguajeId) => {
    try {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0, 10);

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
                creationDate: formattedDate, 
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
