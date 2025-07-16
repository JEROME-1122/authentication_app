



const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
  getAllUser,
  Register,
  Login,
  // sendData,
} = require("../controllers/auntehdicateController");




router.post("/register", Register);
router.post("/login", Login);
router.get("/allUsers", authMiddleware, getAllUser);

module.exports = router;
