const verifyFields = (req, res, next) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ msg: "All fields are required." });
  }

  next();
}

module.exports = verifyFields;
