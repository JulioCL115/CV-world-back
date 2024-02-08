const validateRegister = (req, res, next) => {
    const { name, email, password, phoneNumber } = req.body;

    if(!name) {
        return res.status(400).json({ error: 'Please enter a name' });
    }  
      
    if(!email) {
        return res.status(400).json({ error: 'Please enter a email' });
    }  

    if(!password) {
        return res.status(400).json({ error: 'Please enter a password' });
    }  

    if(!phoneNumber) {
        return res.status(400).json({ error: 'Please enter a phoneNumber' });
    }  

    next();
}

module.exports = validateRegister;
