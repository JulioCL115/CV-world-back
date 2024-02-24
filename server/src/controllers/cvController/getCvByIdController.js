const { Cv, Comment, User, Category, Language } = require('../../db');

const getCvByIdController = async (cvId) => {
    try {
        const cvFound = await Cv.findOne({
            where: { id: cvId, deleted: false },
            include: [
                {
                    model: Comment,
                    include: [{ model: User, attributes: ['name', 'photo', 'id'] }] // Include user data with comments
                },
                {
                    model: User,
                    attributes: ['name', 'photo'] // Include user's name and image
                },
                {
                    model: Category,
                    attributes: ['name']
                },
                {
                    model: Language,
                    attributes: ['name']
                }
            ]
        });

        function formatDate(inputDate) {
            const date = new Date(inputDate);
          
            const monthNames = [
              "jan", "feb", "mar", "apr", "may", "jun",
              "jul", "aug", "sep", "oct", "nov", "dec"
            ];
          
            const day = date.getDate();
            const monthIndex = date.getMonth();
            const year = date.getFullYear();
          
            const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;
          
            return formattedDate;
        }

        const cvFormat = {
            image: cvFound.image,
            id: cvFound.id,
            name: cvFound.name,
            header: cvFound.header,
            description: cvFound.description,
            contact: cvFound.contact,
            experience: cvFound.experience,
            education: cvFound.education,
            skills: cvFound.skills,
            speakingLanguages: cvFound.speakingLanguages,
            otherInterests: cvFound.otherInterests,
            category: cvFound.Category ? cvFound.Category.name : null,
            language: cvFound.Language ? cvFound.Language.name : null,
            userName: cvFound.User.name, // Access the user's username
            userImage: cvFound.User.photo ? cvFound.User.photo : null, // Access the user's photo
            Comments: cvFound.Comments.map((comment) => ({
                comment: comment.comment,
                createdAt: formatDate(comment.createdAt),
                userImage: comment.User.photo ? comment.User.photo : null, // Access the user's photo
                userName: comment.User.name, // Access the user's username
                userId: comment.User.id, // Access the user's username
            }))
        };

        return cvFormat;
    } catch (error) {
        console.error('Error searching for CV by ID:', error);
        throw error;
    }
};

module.exports = getCvByIdController;