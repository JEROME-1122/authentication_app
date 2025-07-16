require("dotenv").config();
const UserDetail = require("../models/authenticateSchema");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;

const getAllUser = async (req, res) => {
  try {
    const users = await UserDetail.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
};


const Register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const user = new UserDetail({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await user.save();
    res.status(201).json({ message: "User registered successfully", data: user });
  } catch (error) {
    res.status(500).json({ message: "User registration failed", error });
  }
};

const Login = async (req, res) => {
  try {
    const user = await UserDetail.findOne({ email: req.body.email });
    if (user) {
      const checkPassword = bcrypt.compareSync(req.body.password, user.password);
      if (checkPassword) {
        const token = jwt.sign({ _id: user._id, role: "user" }, JWT_KEY, { expiresIn: "1h" });
        res.json({ message: "Login successful", token });
      } else {
        res.status(401).json({ message: "Incorrect Password" });
      }
    } else {
      res.status(401).json({ message: "User Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
};

module.exports = {
  getAllUser,
  Register,
  Login,

};

 