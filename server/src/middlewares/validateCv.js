const validateCv = (req, res, next) => {
    const { name, header, description, experience, education, contact, skils, speakingLanguages, otherInterests } = req.body;

    const { userId, categoryId, lenguajeId } = req.params; 

    if (!userId || !categoryId || !lenguajeId) {
        return res.status(400).json({ error: 'Please provide a valid ID in the request parameters' })
    }

    if( !name) {
        return res.status(400).json({ error: 'Please enter a name' });
    }  

    if (!header) {
        return res.status(400).json({ error: 'Please enter a header' });
    } 

    if (!description) {
        return res.status(400).json({ error: 'Please enter a description' });
    }  

    if (!experience) {
        return res.status(400).json({ error: 'Please enter a experience' });
    } 

    if (!education) {
        return res.status(400).json({ error: 'Please enter a education' });
    } 
    
    if (!contact) {
        return res.status(400).json({ error: 'Please enter a contact' });
    }  
    
    if (!skils) {
        return res.status(400).json({ error: 'Please enter a skils' });
    } 

    if (!speakingLanguages) {
        return res.status(400).json({ error: 'Please enter a speaking languages' });
    } 

    if (!otherInterests) {
        return res.status(400).json({ error: 'Please enter a other Interests' });
    } 

    next();
}

module.exports = validateCv;
