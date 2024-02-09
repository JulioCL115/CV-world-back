const { Router } = require("express");
const userRouter = Router();
const createUser = require('../handlers/userHandler/createUser');
const loginUser = require('../handlers/userHandler/loginUser');
const validateLogin = require('../middlewares/validateLogin');
const validateRegister = require('../middlewares/validateRegister');

userRouter.post('/register', validateRegister, createUser);

userRouter.post('/login', validateLogin, loginUser);


module.exports = userRouter;