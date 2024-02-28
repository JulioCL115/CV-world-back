const { User, Subscription } = require('../../db');
const bcrypt = require('bcrypt');
const { uploadImage } = require("../../helpers/cloudinary") 
const tempFileFolder = 'tempFiles';
const fs = require('fs');
const path = require('path');

const updateUserController = async (userId, propertiesToBeUpdated) => {
    try {
        const userFound = await User.findByPk(userId);

        if (!userFound) {
            const error = new Error("User not found for updating");
            error.statusCode = 404; 
            throw error;
        }

        if (userFound.deleted) {
            const error = new Error("Cannot update a deleted user");
            error.statusCode = 400; 
            throw error;
        }

        if (propertiesToBeUpdated.password) {
            const hashedPassword = await bcrypt.hash(propertiesToBeUpdated.password, 10);
            propertiesToBeUpdated.password = hashedPassword;
        }

        if (propertiesToBeUpdated.subscriptionId) {
            const subscription = await Subscription.findByPk(propertiesToBeUpdated.subscriptionId);

            if (!subscription) {
                throw new Error("Subscription not found");
            }

            // Actualiza la relación entre el usuario y la suscripción
            await userFound.setSubscription(subscription);
        }

        const dataUrl = propertiesToBeUpdated.photo ? propertiesToBeUpdated.photo : null;

        if (dataUrl) {
            const base64Data = dataUrl.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');

            // make random string for filename
            const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            const fileName = `${randomString}.png`;
            const completeFilePath = `./${tempFileFolder}/${fileName}`;

            // write the file to the temp folder
            saveFile(base64Data, completeFilePath);

            const result = await uploadImage(completeFilePath);
            console.log(`Result of uploading to Cloudinary: ${result}`);
        
            propertiesToBeUpdated.photo = result.secure_url;
            console.log(propertiesToBeUpdated.photo) 
            deleteFile(completeFilePath);
        }

        await userFound.update(propertiesToBeUpdated);

        const userUpdated = await User.findByPk(userId, {
            include: [Subscription]
        });

        return userUpdated;

    } catch (error) {
        console.error('Error updating User:', error);
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

module.exports = updateUserController;
