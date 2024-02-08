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
            applying :response.applying,
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
}

module.exports = getCvByIdController;