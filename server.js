const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./configuration/.env" }); // config/.env
const app = express()
app.use(express.json());
mongoose
  .connect(process.env.Mongo_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then((res) => console.log("DataBase connect good"))
  .catch((err) => console.log(err));



app.use("/user", require("./routes/useRoutes"));


const port = process.env.PORT;
app.listen(5000, (err) => {
  err ? console.log(err) : console.log("server connect", 5000);
});
