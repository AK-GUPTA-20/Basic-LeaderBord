const User = require("../models/User");
const Claim = require("../models/Claim");

exports.claimPoints = async (req, res) => {
  const { userId } = req.body;
  if (!userId) return res.json({ success: false, msg: "User ID is required" });

  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.json({ success: false, msg: "User not found" });

  user.totalPoints += points;
  await user.save();

  const history = new Claim({ userId, claimedPoints: points });
  await history.save();

  res.json({ success: true, claimedPoints: points });
};
