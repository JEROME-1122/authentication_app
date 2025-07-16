const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_LINK);
    console.log("MongoDB connected");

  } catch (error) {
    console.error("DB connection error:", error);
  }
};

module.exports = connect;


