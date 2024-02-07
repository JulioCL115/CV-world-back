const { Router } = require("express");
const userRouter = Router();
const { register } = require('../handlers/userHandler/registerUser');
const { createUserController } = require("../controllers/userController/registerUserController");
const {loginUser} = require('../controllers/userController/loginUserController')
const {logoutUser} = require('../controllers/userController/logoutUserController')
const {profileUser} = require('../controllers/userController/profileUserController')
userRouter.post('/register', createUserController );
userRouter.post('/login', loginUser);
userRouter.get('/logout', logoutUser)
userRouter.get('/profile', profileUser)


module.exports = userRouter;