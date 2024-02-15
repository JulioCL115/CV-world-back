const { Cv, User, Category, Lenguaje, Subscription } = require('../../db');

const postCvController = async (name, image, header, description, experience, education, contact, skills, speakingLanguages, otherInterests, views = 0, userId, categoryId, lenguajeId) => {
    try {
        const existingCv = await Cv.findOne({
            where: {
                name,
                header,
                description,
                contact,
                skills,
                speakingLanguages,
                otherInterests,
                UserId: userId,
                CategoryId: categoryId,
                LenguajeId: lenguajeId
            }
        });

        if(existingCv) {
            const error = new Error('CV with similar characteristics already exists');
            error.statusCode = 409;
            throw error;
        }

        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0, 10);

        const newCv = await Cv.create({
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
        });

        await newCv.reload({
            include: [
                { model: User, include: [{ model: Subscription }] }, // Incluir la relación con User
                { model: Category }, // Incluir la relación con Category
                { model: Lenguaje } // Incluir la relación con Lenguaje
            ]
        });

        const newCvFound = {
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
            user: {
                userName: newCv.User.name,
                subscription: newCv.User.Subscription.name,
                photo: newCv.User.photo
            },
            category: newCv.Category.name,
            language: newCv.Lenguaje.name,
        }

        return newCvFound;
   
    } catch (error) {
        console.error('Error creating CV:', error);
        throw error;
    }
}

module.exports = postCvController;
