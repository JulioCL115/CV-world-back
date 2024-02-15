const validateRegister = (req, res, next) => {
    const { name, email, password } = req.body;

    if(!name) {
        return res.status(400).json({ error: 'Please enter a name' });
    }  
      
    if(!email) {
        return res.status(400).json({ error: 'Please enter a email' });
    }  

    if(!password) {
        return res.status(400).json({ error: 'Please enter a password' });
    }  

    next();
}

module.exports = validateRegister;
