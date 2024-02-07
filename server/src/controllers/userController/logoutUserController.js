const logoutUser = async (req, res) => {
    res.clearCookie('token')
    res.status(200).json({message: 'Logout successfully'})
}

module.exports = {logoutUser}