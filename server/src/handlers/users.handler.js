const { User } = require("../db");
const axios = require("axios");

const loginHandler = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.status(200).json({ msg: "you are logged in!" });
};

const registerHandler = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.status(200).json({ msg: "you are signed up!" });
};



module.exports = {
  loginHandler,
  registerHandler
};
