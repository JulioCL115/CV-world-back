const {Cv,Comment} = require("../../db")
const getCvByIdController = async (idKey) => {
    const response = await Cv.findByPk(idKey, {
        include: [{ model: Comment }],
      });
      if (response && response.review !== null) {
        const comments = response[Comment] || [];
        
        const result = {
            id: response.id,
            name:response.name,
            image: response.image,
            description: response.description,
            experience:response.experience,
            study:response.study,
            contact: response.contact,
          Comments: comments.map(com => ({
            id: com.id,
            content: com.content,
            rating: com.rating,
          })) ,
        };
          console.log("op")
          return result;
          
         }
         return null

    try {
        const cvFound = await Cv.findOne({
            where: { id }
        });
    
        return cvFound;
    } catch (error) {
        console.error('Error searching for CV:', error);
        throw error; 
    }
}

module.exports = getCvByIdController;