require("dotenv").config();
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    // Verificar el token JWT
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(401).json({ error: 'Failed to authenticate token' });
        }
        
        // Si la verificación es exitosa, adjuntamos los datos decodificados del token a la solicitud
        req.userId = decoded.id;

        next();
    });

}

module.exports = {
    verifyToken
};
