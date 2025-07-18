const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.addUser = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.json({ success: false, msg: "Name is required" });

  const user = new User({ name });
  await user.save();
  res.json({ success: true, user });
};
