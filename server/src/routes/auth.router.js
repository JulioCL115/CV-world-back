const { Router } = require("express");

const loginRouter = Router();
const registerRouter = Router();

const { loginHandler, registerHandler } = require("../handlers/users.handler");

loginRouter.post("/", loginHandler);

registerRouter.post("/", registerHandler);

module.exports = { loginRouter, registerRouter };
