const { User } = require("../db");

const loginHandler = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.status(200).json({ msg: "you are logged in!" });
};

const registerHandler = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    console.log(email, password);
    const userRegistered = User.build({ name, email, password, role });
    await userRegistered.save();
    res
      .status(200)
      .json({ msg: "you are signed up!", newUser: userRegistered });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

module.exports = {
  loginHandler,
  registerHandler,
};
