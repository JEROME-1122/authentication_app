const express = require("express");
const app = express();
const cors = require("cors");
const connected = require("./db/myDataBase");
const userRoutes = require("./routes/UserRoutes");
require('dotenv').config();

connected();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req,res)=>{
  res.send("API is working.");
})
app.use("/user", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
