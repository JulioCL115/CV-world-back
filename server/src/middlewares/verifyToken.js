const jwt = require('jsonwebtoken');
const { User } = require('../db');

const verifyToken = async (req, res, next) => {
    try {

        const token = req.header('auth-token');

        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }
    
        // Verificar el token JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const userFound = await User.findByPk(decoded.id);

        if (!userFound) {
            return res.status(401).json({ error: 'User not found' });
        }

        if (userFound.id !== decoded.id) {
            return res.status(401).json({ error: 'Invalid token for this user' });
        }

        req.user = decoded;

        next();

    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token expired' });
        }
        return res.status(401).json({ error: 'Failed to authenticate token' });
    }
};

module.exports = verifyToken;