const validateLogin = (req, res, next) => {
    const { email, password } = req.body;
      
    if(!email) {
        return res.status(400).json({ error: 'Please enter a email' });
    }  

    if(!password) {
        return res.status(400).json({ error: 'Please enter a password' });
    }  

    next();
}

module.exports = validateLogin;
