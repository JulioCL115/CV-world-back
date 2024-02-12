const loginUserController = require('../../controllers/userController/loginUserController');
const { createUserSchema, ZodError } =  require('../../schemas/userSchema');
const { createAccesToken } = require('../../libs/jwt');
const {onAuthStateChanged} = require('firebase/auth')
const {auth} = require('../../firebase')
const {signOut} = require('firebase/auth')


const loginUserHandler = async (req, res) => {
    try {
        const {email, password} = req.body
        if(!email || !password){
            res.status(400).json({message: 'Email and password are required'})
        }
        const token = await createAccesToken({id: userFound.id})
        res.cookie('token', token)
        res.status(200).json({
            id: userFound.id,
            username: userFound.username,
            email: userFound.email
        })

        onAuthStateChanged(auth, async (user) => {
            if(user){
                res.status(400).json({message: 'User already exists'})
            }
            const userCreated = await loginUserController(req, res)
            res.json(userCreated)
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {loginUserHandler}