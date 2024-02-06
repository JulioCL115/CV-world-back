const postCvController = require('../../controllers/cvController/postCvController');

const createCv = async (req, res) => {
    const { name, image, description, experience, contact, study } = req.body;

    try {
        const cvCreated =  await postCvController(name, req, image, description, experience, contact, study);
        res.status(201).json(cvCreated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = createCv;