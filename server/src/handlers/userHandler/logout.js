const {signOut} = require('firebase/auth');

const logout = async (req, res) => {
    await signOut(auth)
}

module.exports = {logout}