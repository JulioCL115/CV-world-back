const { Cv } = require('../../db');
// const { uploadImage } = require("../../helpers/cloudinary");
// const fs = require("fs-extra");

const postCvController = async (name, image, header, description, experience, education, contact, skills, speakingLanguages, otherInterests, views = 0, userId, categoryId, lenguajeId) => {
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
                skills,
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
        console.error('Error creating CV:', error);
        throw error;
    }
}

module.exports = postCvController;
