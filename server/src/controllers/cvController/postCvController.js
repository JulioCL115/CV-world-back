const { Cv, User, Subscription, Category, Language } = require('../../db');
const { uploadImage } = require("../../helpers/cloudinary");
const fs = require('fs');
const path = require('path');
const { Op } = require("sequelize");

const tempFileFolder = 'tempFiles';

const postCvController = async (name, image, header, description, experience, education, contact, skills, speakingLanguages, otherInterests, views = 0, category, language, userId) => {
    try {
        const categoryInDB = await Category.findOne({
            where: {
                name: {
                    [Op.like]: category,
                }
            }
        });

        const languageInDB = await Language.findOne({
            where: {
                name: {
                    [Op.like]: language,
                }
            }
        });

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
                CategoryId: categoryInDB.id,
                LanguageId: languageInDB.id
            }
        });

        if (existingCv) {
            const error = new Error('CV with similar characteristics already exists');
            error.statusCode = 409;
            throw error;
        }

        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0, 10);


        const newCv = await Cv.create({
            name,
            image: '',
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
            CategoryId: categoryInDB.id,
            LanguageId: languageInDB.id
        });

        await newCv.reload({
            include: [
                { model: User, include: [{ model: Subscription }] }, // Incluir la relación con User
            ]
        });

        let subscription = newCv.User.Subscription ? newCv.User.Subscription.name : 'Plan Básico';

        const dataUrl = image ? image : null;

        if (dataUrl) {
            const base64Data = dataUrl.replace(/^data:image\/png;base64,/, '');

            // make random string for filename
            const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            const fileName = `${randomString}.png`;
            const completeFilePath = `./${tempFileFolder}/${fileName}`;

            // write the file to the temp folder
            saveFile(base64Data, completeFilePath);

            const result = await uploadImage(completeFilePath);
            console.log(`Result of uploading to Cloudinary: ${result}`);

            newCv.image = result.secure_url

            newCv.save();

            // delete the file from the temp folder
            deleteFile(completeFilePath);
        }

        const newCvFound = {
            id: newCv.id,
            name,
            image: newCv.image,
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
                id: newCv.User.id,
                userName: newCv.User.name,
                subscription,
                photo: newCv.User.photo
            },
            category: categoryInDB.name,
            language: languageInDB.name,
        }

        return newCvFound;

    } catch (error) {
        console.error('Error creating CV:', error);
        throw error;
    }
}

function saveFile(base64Data, completeFilePath) {
    // Ensure the directory exists
    const dir = path.dirname(completeFilePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    // Write the file to the temp folder
    try {
        fs.writeFileSync(completeFilePath, base64Data, 'base64');
        console.log('File saved successfully');
    } catch (err) {
        console.error('Error writing file', err);
        throw err;
    }
}

function deleteFile(filepath) {
    try {
        fs.unlinkSync(filepath);
        console.log('File deleted successfully');
    } catch (err) {
        console.error('Error deleting file:', err);
    }
}

module.exports = postCvController;
