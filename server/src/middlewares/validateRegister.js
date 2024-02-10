const validateRegister = (req, res, next) => {
    const { userName, email, password } = req.body;

    if(!userName) {
        return res.status(400).json({ error: 'Please enter a User Name' });
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
