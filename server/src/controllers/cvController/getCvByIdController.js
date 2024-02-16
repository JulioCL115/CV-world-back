const { Cv, Comment  } = require('../../db');

const getCvByIdController = async (cvId) => {

    try {
        const cvFound = await Cv.findOne({
            where: { id: cvId, deleted: false },
            include: [{ model: Comment }] // Incluye los comentarios asociados al currículum
        });

        if(!cvFound) {
            return null;
        }

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
            views: cvFound.views++,
            category: cvFound.category,
            language: cvFound.language,
            UserId: cvFound.UserId,
            Comments: cvFound.Comments.map( (comment) => comment.comment)
        }
    
        return cvFormat;
    } catch (error) {
        console.error('Error searching for CV by ID:', error);
        throw error;
    }
}
module.exports = getCvByIdController;
