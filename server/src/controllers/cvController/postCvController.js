const { Cv, User, Comment } = require('../../db');

const postCvController = async (name, image, description, experience, contact, study) => {

    const [newCv, created] = await Cv.findOrCreate({
        where: {
            name,
            image,
            description,
            experience,
            contact,
            study
        }
    });

    return newCv;
}

module.exports = postCvController;