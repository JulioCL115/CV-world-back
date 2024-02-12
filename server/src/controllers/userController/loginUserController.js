const { User } = require('../../db')
const {createAccesToken} = require('../../libs/jwt')
const bcrypt = require('bcrypt')

const loginUser = async (email, password) => {
    try {
       const userFound = await User.findOne({ where: {email: email}})
       if(!userFound){res.status(400).json({error: 'User not found'})}
       const passwordMatch = await bcrypt.compare(password, userFound.password)
        if(!passwordMatch){res.status(400).json({error: 'Password incorrect'})}
        return userFound
        // const token = await createAccesToken({id: userFound.id})
        // res.cookie('token', token)
        // res.status(200).json({
        //     id: userFound.id,
        //     username: userFound.username,
        //     email: userFound.email
        // })

    } catch (error) {   
        res.status(500).json({message: error.message})
    }
}

module.exports = {loginUser};