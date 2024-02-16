const firebaseAdmin = require('../../firebase/firebaseConfig');
const jwt = require('jsonwebtoken');
const { User, Cv, Subscription } = require('../../db');

const loginFirebase = async (req, res) => {
    try {
        const { idToken } = req.body;
        console.log(idToken)

        if (!idToken) {
            return res.status(400).json({ error: 'No idToken provided' });
        }

        const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken);

        const uid = decodedToken.uid;
        const email = decodedToken.email.toLowerCase();
        const name = decodedToken.name

        const userFound = await User.findOne({
            where: { email: email.toLowerCase() },
            include: [{ model: Cv }, { model: Subscription }]       
        });

        if (!userFound) {
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }

        const userFoundFiltered = {
            id: userFound.id,
            name: userFound.name,
            photo: userFound.photo,
            email: userFound.email,
            role: userFound.role,
            Cvs: userFound.Cvs,
            Subscription: userFound.Subscription
        }

        // Generamos un token JWT para el usuario
        const token = jwt.sign({ uid, email, name }, process.env.JWT_SECRET, { expiresIn: '10d' });

        res.header('auth-token', token).json({
            message: 'Authenticated user',
            token,
            userFoundFiltered
        });

    } catch (error) {
        console.error('Error:', error.message);
        return res.status(500).json({ error: 'Failed to authenticate with Firebase' });
    }
};

module.exports = loginFirebase;
