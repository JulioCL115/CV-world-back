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
            description: cvFound.description,
            experience: cvFound.experience,
            contact: cvFound.contact,
            study: cvFound.study,
            applying: cvFound.applying,
            UserId: cvFound.UserId,
            Comments: cvFound.Comments.map( (comment) => comment.comment)
        }
    
        return cvFormat;
    } catch (error) {
        console.error('Error searching for CV:', error);
        throw error;
    }
}

// const { Cv, Comment } = require("../../db");
// const getCvByIdController = async (idKey) => {
//   const response = await Cv.findByPk(idKey, {
//     include: [{ model: Comment }],
//   });
//   if (response && response.review !== null) {
//     const comments = response[Comment] || [];

//     const result = {
//       id: response.id,
//       name: response.name,
//       image: response.image,
//       description: response.description,
//       experience: response.experience,
//       study: response.study,
//       contact: response.contact,
//       applying: response.applying,
//       Comments: comments.map((com) => ({
//         id: com.id,
//         content: com.content,
//         rating: com.rating,
//       })),
//     };
//     console.log("op");
//     return result;
//   }
//   return null;
// };

module.exports = getCvByIdController;