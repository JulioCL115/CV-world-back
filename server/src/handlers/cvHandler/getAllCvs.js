const getCvByQueryController = require('../../controllers/cvController/getCvByQueryController');

const getAllCvs = async (req, res) => {
    console.log('getAllCvs')
    try {
        const { search, sort, categories, languages } = req.query;

        console.log(categories, 'CATEGORIES')

        const offset = parseInt(req.query.offset ? req.query.offset : 0);
        const limit = parseInt(req.query.limit ? req.query.limit : 16);

        const { totalCvs, cvs } = await getCvByQueryController(search, categories, languages, limit, offset);

        if (!cvs || cvs.length === 0) {
            return res.status(404).json({ error: "CVs not found." });
        }

        if (sort) {
            if (sort === "views") {
                cvs.sort((a, b) => b.views - a.views);
            }

            if (sort === "date") {
                cvs.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
            }
        }

        const totalPages = Math.ceil(totalCvs / limit);

        console.log(`total de paginas: ${totalPages}`);

        res.status(200).json({ cvs, totalPages });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllCvs;



// const getCvByQueryController = require('../../controllers/cvController/getCvByQueryController');
// const {User,Subscription} = require("../../db")

// const getAllCvs = async (req, res) => {
//     console.log('getAllCvs');
//     try {
//         const { search, sort, categories, languages } = req.query;
//         console.log(categories, 'CATEGORIES');

//         const offset = parseInt(req.query.offset ? req.query.offset : 0);
//         const limit = parseInt(req.query.limit ? req.query.limit : 16);

//         const { totalCvs, cvs } = await getCvByQueryController(search, categories, languages, limit, offset);

//         if (!cvs || cvs.length === 0) {
//             return res.status(404).json({ error: "CVs not found." });
//         }

//         const idUsers = cvs.map(cv => cv.UserId);
//         console.log("este es el id",idUsers)
//         console.log("este es el .length",cvs.length)

//         // Obtén la información de suscripción de cada usuario
//         const userSubscriptionInfo = await User.findAll({
//             attributes: ['id', 'SubscriptionId'],
//             where: {
//                 id: idUsers
//             }
//         });

//         console.log("este es el id",userSubscriptionInfo)
        
//         // Crea un mapa para facilitar la búsqueda de SubscriptionId por UserId
//         const userSubscriptionMap = new Map();
//         userSubscriptionInfo.forEach(user => {
//             userSubscriptionMap.set(user.id, user.SubscriptionId);
//         });
        
//         // Obtén la información de suscripción de cada usuario
//         const subscriptionIds = Array.from(userSubscriptionMap.values());
        
//         const subscriptions = await Subscription.findAll({
//             attributes: ['id', 'name'],
//             where: {
//                 id: subscriptionIds
//             }
//         });
        
//         // Crea un mapa para facilitar la búsqueda de nombre de suscripción por SubscriptionId
//         const subscriptionNameMap = new Map();
//         subscriptions.forEach(subscription => {
//             subscriptionNameMap.set(subscription.id, subscription.name);
//         });
        
//         // Ordena los CVs según la suscripción
//         cvs.sort((a, b) => {
//             const subscriptionIdA = userSubscriptionMap.get(a.UserId);
//             const subscriptionIdB = userSubscriptionMap.get(b.UserId);
        
//             const subscriptionNameA = subscriptionNameMap.get(subscriptionIdA);
//             const subscriptionNameB = subscriptionNameMap.get(subscriptionIdB);
        
//             // Coloca los usuarios premium primero
//             if (subscriptionNameA === 'Plan Premium' && subscriptionNameB !== 'Plan Premium') {
//                 return -1;
//             } else if (subscriptionNameA !== 'Plan Premium' && subscriptionNameB === 'Plan Premium') {
//                 return 1;
//             }
        
//             // Si ambos son premium o no son premium, ordena según tus criterios actuales
//             if (sort === "views") {
//                 return b.views - a.views;
//             } else if (sort === "date") {
//                 return new Date(b.creationDate) - new Date(a.creationDate);
//             }
        
//             return 0;
//         });

//         const totalPages = Math.ceil(totalCvs / limit);

//         console.log(`total de paginas: ${totalPages}`);

//         res.status(200).json({ cvs, totalPages });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: error.message });
//     }
// };

// module.exports = getAllCvs;