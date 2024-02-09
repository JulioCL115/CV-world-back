const { Cv, Comment  } = require('../../db');

const getCvByIdController = async (cvId) => {

    try {
        const cvFound = await Cv.findOne({
            where: { id: cvId },
            include: [{ model: Comment }] // Incluye los comentarios asociados al currículum
        });

        const cvFormat = {
            id: cvFound.cvId,
            name: cvFound.name,
            image: cvFound.image,
            header: cvFound.header,
            description: cvFound.description,
            experience: cvFound.experience,
            education: cvFound.education,
            contact: cvFound.contact,
            skills: cvFound.skills,
            speakingLanguages: cvFound.speakingLanguages,
            otherInterests: cvFound.otherInterests,
            creationDate: cvFound.creationDate,
            views: cvFound.views,
            UserId: cvFound.UserId,
            Comments: cvFound.Comments.map( (comment) => comment.comment)
        }
    
        return cvFormat;
    } catch (error) {
        console.error('Error searching for CV:', error);
        throw error;
    }
}
module.exports = getCvByIdController;
