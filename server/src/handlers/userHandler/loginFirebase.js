const firebaseAdmin = require('../../firebase/firebaseConfig');
const jwt = require('jsonwebtoken');

const loginFirebase = async (req, res) => {
    try {
        const { idToken } = req.body;

        if (!idToken) {
            return res.status(400).json({ error: 'No idToken provided' });
        }

        const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken);

        const uid = decodedToken.uid;

        // Generamos un token JWT para el usuario
        const token = jwt.sign({ uid }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.header('auth-token', token).json({
            message: 'Authenticated user',
            token
        });

    } catch (error) {
        return res.status(500).json({ error: 'Failed to authenticate with Firebase' });
    }
};

module.exports = loginFirebase;