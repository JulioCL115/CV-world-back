const { Router } = require("express");
const userRouter = Router();
const createUser = require('../handlers/userHandler/createUser');
const loginUser = require('../handlers/userHandler/loginUser');
const loginFirebase = require('../handlers/userHandler/loginFirebase');

userRouter.post('/register', createUser);

userRouter.post('/login', loginUser);

userRouter.post('/firebase', loginFirebase);

module.exports = userRouter;