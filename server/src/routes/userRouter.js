const { Router } = require("express");
const userRouter = Router();
const createUser = require('../handlers/userHandler/createUser');
const loginUser = require('../handlers/userHandler/loginUser');
const loginFirebase = require('../handlers/userHandler/loginFirebase');
const deleteUser = require('../handlers/userHandler/deleteUser');
const updateUser = require('../handlers/userHandler/updateUser');
const getUserById = require('../handlers/userHandler/getUserById');
const getAllUsers = require('../handlers/userHandler/getAllUsers');
const getAllUsersDashboard =  require('../handlers/userHandler/getAllUsersDashboard');
const getUserByIdDashboard = require('../handlers/userHandler/getUserByIdDashboard');
const restoreUser = require('../handlers/userHandler/restoreUser');
const verifyToken = require('../middlewares/verifyToken');

userRouter.get('/dashboard/:userId', verifyToken, getUserByIdDashboard);

userRouter.get('/dashboard', verifyToken, getAllUsersDashboard);

userRouter.post('/register', createUser);

userRouter.post('/firebase', loginFirebase);

userRouter.post('/login', loginUser);

userRouter.put('/delete/:userId', verifyToken, deleteUser);

userRouter.put('/restore/:userId', verifyToken, restoreUser);

userRouter.put('/:userId', verifyToken, updateUser);

userRouter.get('/:userId', getUserById);

userRouter.get('/', getAllUsers);

module.exports = userRouter;