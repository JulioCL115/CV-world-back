const jwt = require('jsonwebtoken')
const TOKEN_SECRET = 'your unique secret'

const createAccesToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, TOKEN_SECRET  , { expiresIn: '1h' }, (err, token) => {
            if (err) reject(err);
            resolve(token);
        });
    })
}

module.exports = {createAccesToken}