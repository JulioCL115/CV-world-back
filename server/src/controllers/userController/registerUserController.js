const {register} = require('../../handlers/userHandler/registerUser')
const { createAccesToken } = require('../../libs/jwt')
const {User} = require('../../db')
const bcrypt = require('bcrypt')

const createUserController = async (req,res) => {
    const {username,email, password} = req.body

    try {
        const userFind = await User.findOne({where: {email: email}})
        if(userFind){
            res.status(400).json({error: 'User already exists'})
        }
        const passwordHashed = await bcrypt.hash(password, 10)
        const userCreated = await User.create({
            username,
            email,
            password: passwordHashed
        })
        const token = await createAccesToken({id: userCreated.id})
        res.cookie('token', token)
        res.json({
            id: userCreated.id,
            username: userCreated.username,
            email: userCreated.email
        })
     
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {createUserController};