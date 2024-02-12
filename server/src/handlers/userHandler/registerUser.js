const { createUserWithEmailAndPassword } = require('firebase/auth');
const {createUserController} = require('../../controllers/userController/registerUserController');
const { createAccesToken } = require('../../libs/jwt');

const registerUserHandler = async(req,res) =>{
    try {
        const {email, password} = req.body
        if(!email || !password){
            res.status(400).json({message: 'Email and password are required'})
        }
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)
    } catch (error) {
         res.status(500).json({message: error.message})        
    }
}