const express = require("express");
require("dotenv").config();
const path = require("path");
const cors = require("cors");
//const corsOptions = require("./config/corsOptions");
const { logger } = require("./Middleware/logs");
const errorHandler = require("./Middleware/errorHandler");
const verifyJWT = require("./Middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const app = express();
const PORT = process.env.PORT || 3500;

connectDB();
app.use(logger);

//app.use(cors(corsOptions));
app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.json());

app.use("/", express.static(path.join(__dirname, "/public")));

app.use("/", require("./Routes/root"));
app.use("/register", require("./Routes/register"));
app.use("/auth", require("./Routes/auth"));
app.use("/refresh", require("./Routes/refresh"));
app.use("/logout", require("./Routes/logout"));

app.use(verifyJWT);
app.use("/employees", require("./Routes/api/employees"));
app.use("/users", require("./routes/api/users"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected To MongoDB");
  app.listen(PORT, console.log(`server is running on port ${PORT}`));
});
