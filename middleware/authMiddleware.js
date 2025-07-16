require("dotenv").config();
const JWT_KEY = process.env.JWT_KEY;
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Not Aloowed" });
  } else {
    try {
      const payload = jwt.verify(req.headers.authorization, JWT_KEY);
      // console.log(payload)
      req.user = payload;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not a valid token" });
    }
  }
};

module.exports = authMiddleware;
