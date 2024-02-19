const {User} = require('../../db')

const profileUser = async(req,res) =>{
    const userFound = await User.findByPk(req.user.i)
    if(!userFound){return res.status(400).json({error: 'User not found'})}
    return res.json({
        id: userFound.id,
        username: userFound.username,
        email: userFound.email
    })
}
module.exports = {profileUser}