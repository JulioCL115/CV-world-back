const { Router } = require("express");
const userRouter = Router();
const createUser = require('../handlers/userHandler/createUser');
const loginUser = require('../handlers/userHandler/loginUser');

userRouter.post('/register', createUser);

userRouter.post('/login', loginUser);

module.exports = userRouter;