const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  console.log(user);
  return jwt.sign(
    { user_id: user.user_id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const authenticate = (req, res, next) => {
  console.log(req.headers);
  const token = req.headers.authorization;
  console.log(token)
  if (!token)
    return res
      .status(401)
      .json({ message: "Authentication failed. Token not provided." });

  try {
    const decodedToken = verifyToken(token);
    req.userData = decodedToken;
    next();
  } catch (error) {
    console.log(error)
    return res
      .status(401)
      .json({ message: "Authentication failed. Invalid token." });
  }
};

module.exports = { authenticate, generateToken, verifyToken };
