const jwt = require('jsonwebtoken');
const { User } = require('../db');

const verifyToken = async (req, res, next) => {
    try {
        const token = req.header('auth-token');

        if (!token) {
            return res.status(401).json({ error: 'No token provided' });
        }
    
        // Verificar el token JWT
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;

            const userFound = await User.findByPk(decoded.id);

            if (!userFound) {
                return res.status(404).json({ error: 'User not found' });
            }

            next();
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(401).json({ error: 'Invalid token' });
        }

    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = verifyToken;
