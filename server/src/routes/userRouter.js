const { Router } = require("express");
const userRouter = Router();
const createUser = require('../handlers/userHandler/createUser');
const loginUser = require('../handlers/userHandler/loginUser');
const loginFirebase = require('../handlers/userHandler/loginFirebase');
const deleteUser = require('../handlers/userHandler/deleteUser');
const updateUser = require('../handlers/userHandler/updateUser');
const verifyToken = require('../middlewares/verifyToken');

userRouter.post('/register', createUser);

userRouter.post('/login', loginUser);

userRouter.post('/firebase', loginFirebase);

userRouter.put('/:userId', verifyToken, updateUser);

userRouter.put('/delete', verifyToken, deleteUser);

module.exports = userRouter;