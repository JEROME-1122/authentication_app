const mongoose = require("mongoose");

const authenticateSchema = new mongoose.Schema({
  username: {
    type: String,
      required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserDetail = mongoose.model("UserDetail", authenticateSchema);
module.exports = UserDetail;
