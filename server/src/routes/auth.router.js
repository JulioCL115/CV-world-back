const { Router } = require("express");
const verifyFields = require("../middlewares/verifyFields");

const loginRouter = Router();
const registerRouter = Router();

const { loginHandler, registerHandler } = require("../handlers/users.handler");

loginRouter.post("/", loginHandler);

registerRouter.post("/", verifyFields,registerHandler);

module.exports = { loginRouter, registerRouter };
