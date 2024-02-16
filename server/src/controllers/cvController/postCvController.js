const { Cv, User, Subscription } = require('../../db');
const { uploadImage } = require("../../helpers/cloudinary");
 const fs = require("fs-extra");

const postCvController = async ({name, req,image, header, description, experience, education, contact, skills, speakingLanguages, otherInterests,  views = 0,category, lenguaje}, userId) => {
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
                category:category,
                language:lenguaje
            }
        });

        if(existingCv) {
            const error = new Error('CV with similar characteristics already exists');
            error.statusCode = 409;
            throw error;
        }

        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0, 10);
        const jsonObjectExperience = JSON.parse(experience);
        const jsonObjectEducation = JSON.parse(education);
        const jsonObjectContact = JSON.parse(contact);

        const newCv = await Cv.create({
            name,
            image: [],
            header,
            description,
            experience: jsonObjectExperience, 
            education: jsonObjectEducation,   
            contact: jsonObjectContact,
            skills,
            speakingLanguages,
            otherInterests: otherInterests,
            creationDate: formattedDate,
            views,
            UserId: userId,
            category:category,
            language:lenguaje
        });

        await newCv.reload({
            include: [
                { model: User, include: [{ model: Subscription }] }, // Incluir la relación con User
            ]
        });

        let subscription = newCv.User.Subscription ? newCv.User.Subscription.name : 'No subscription';

        if (req.files?.image && req.files?.image.length > 0) {
            console.log("Subiendo imágenes a Cloudinary");
        
            const uploadPromises = req.files.image.map(async (file) => {
                const result = await uploadImage(file.tempFilePath);
                console.log("Resultado de la subida a Cloudinary: ", result);
                return {
                    public_id: result.public_id,
                    secure_url: result.secure_url,
                };
            });
        
            console.log("uploadPromises", uploadPromises)
            const uploadedImages = await Promise.all(uploadPromises);
            console.log("uploadImage prueba ", uploadPromises)
            newCv.image = uploadedImages;
        
            console.log("Eliminando archivos temporales");
            await Promise.all(req.files.image.map(async (file) => {
                await fs.unlink(file.tempFilePath);
            }));

            console.log("Guardando producto en la base de datos");
            await newCv.save();
        } else {
            const result = await uploadImage(req.files.image.tempFilePath)
            newCv.image = [
                {
                    public_id : result.public_id,
                    secure_url : result.secure_url
                }
            ]
            await fs.unlink(req.files.image.tempFilePath)
            console.log(result)
            await newCv.save();
        }

        const newCvFound = {
            name,
            image: newCv.image,
            header,
            description,
            experience:jsonObjectExperience, 
            education:jsonObjectEducation,   
            contact:jsonObjectContact,
            skills,
            speakingLanguages,
            otherInterests,
            creationDate: formattedDate,
            views,   
            user: {
                id: newCv.User.id,
                userName: newCv.User.name,
                subscription,                
                photo: newCv.User.photo
            },
            category:category,
            language:lenguaje
        }

        return newCvFound;
   
    } catch (error) {
        console.error('Error creating CV:', error);
        throw error;
    }
}

module.exports = postCvController;
