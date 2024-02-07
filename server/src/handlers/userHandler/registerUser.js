const {createUserController} = require('../../controllers/userController/registerUserController');
const { createAccesToken } = require('../../libs/jwt');

const register = async (req,res) =>{
    const {username,email, password} = req.body
    try {
        const registered = await createUserController(username,email, password)
        const token = await createAccesToken({id: registered.id})
        res.cookie('token', token)
        res.status(201).json({
            id: registered.id,
            username: registered.username,
            email: registered.email,
        })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {register}