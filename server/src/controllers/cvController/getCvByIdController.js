const { Cv, Comment, User, Category, Language } = require('../../db');

const getCvByIdController = async (cvId) => {

    console.log(cvId)

    try {
        const cvFound = await Cv.findOne({
            where: { id: cvId, deleted: false },
            include: [
                {
                    model: User,
                    attributes: ['name', 'photo'] 
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


        if (!cvFound) {
            const error = new Error('CV not found');
            error.statusCode = 404;
            throw error;
        }

        const comments = await Comment.findAll({
            where: { CvId: cvId, deleted: false },
            include: [{ model: User, attributes: ['name', 'photo', 'id'] }] 
        })

        if (!comments) {
            console.log('No comments found');
            cvFound.Comments = [];
        } else {
            cvFound.Comments = comments.map((comment) => comment.get({ plain: true }));
        }

        const cvFormat = {
            image: cvFound.image ? cvFound.image : null,
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
            category: cvFound.Category,
            language: cvFound.Language,
            userName: cvFound.User.name, 
            userImage: cvFound.User.photo ? cvFound.User.photo : null, 
            Comments: cvFound.Comments.map((comment) => ({
                id: comment.id,
                comment: comment.comment,
                createdAt: formatDate(comment.createdAt),
                userImage: comment.User.photo ? comment.User.photo : null, 
                userName: comment.User.name, 
                userId: comment.User.id, 
            }))
        };

        return cvFormat;
    } catch (error) {
        console.error('Error searching for CV by ID:', error);
        throw error;
    }
};

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

module.exports = getCvByIdController;