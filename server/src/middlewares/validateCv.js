const validateCv = (req, res, next) => {
    const { name, image, description, experience, contact, study, applying } = req.body;

    const { userId } = req.params; 

    if(!userId) {
        return res.status(400).json({ error: 'Please provide a valid ID in the request parameters' })
    }

    if( !name) {
        return res.status(400).json({ error: 'Please enter a name' });
    }  

    if (!image) {
        return res.status(400).json({ error: 'Please enter a image' });
    } 

    if (!description) {
        return res.status(400).json({ error: 'Please enter description' });
    }  

    if (!experience) {
        return res.status(400).json({ error: 'Please enter a experience' });
    } 

    if (!contact) {
        return res.status(400).json({ error: 'Please enter a contact' });
    } 
    
    if (!study) {
        return res.status(400).json({ error: 'Please enter a study' });
    }  
    
    if (!applying) {
        return res.status(400).json({ error: 'Please enter a applying' });
    } 

    next();
}

module.exports = validateCv;
