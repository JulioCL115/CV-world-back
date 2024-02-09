const { Cv } = require('../../db');
const { uploadImage } = require("../../helpers/cloudinary");
const fs = require("fs-extra");

const postCvController = async (name, image, header, description, experience, education, contact, skills, speakingLanguages, otherInterests, views = 0, userId, categoryId, lenguajeId, req) => {
    try {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0, 10);

        let uploadedImages = [];

        if (req?.files?.image && req?.files?.image.length > 0) {
            console.log("Subiendo imágenes a Cloudinary");

            const uploadPromises = req.files.image.map(async (file) => {
                const result = await uploadImage(file.tempFilePath);
                console.log("Resultado de la subida a Cloudinary: ", result);
                return {
                    public_id: result.public_id,
                    secure_url: result.secure_url,
                };
            });

            uploadedImages = await Promise.all(uploadPromises);
            console.log("Eliminando archivos temporales");
            
            await Promise.all(req.files.image.map(async (file) => {
                await fs.unlink(file.tempFilePath);
            }));
        }

        console.log("Guardando CV en la base de datos");
        const [newCv, created] = await Cv.findOrCreate({
            where: {
                name,
                image: uploadedImages,
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

        console.log("CV creado exitosamente:", newCv);
        return newCv;

    } catch (error) {
        console.error('Error creating CV:', error);
        throw error;
    }
}

module.exports = postCvController;

