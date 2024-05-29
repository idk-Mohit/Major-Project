const express = require("express");
const compression = require("compression");
// Cors (cross origin resource sharing)
const cors = require("cors");
// morgan ( create request logs)
const logger = require("morgan");
const routes = require("./src/backend/Routes/MainRoutes");
const session = require("express-session");
const cookie = require("cookie-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const passportlocal = require("passport-local");
const flash = require("connect-flash");
const multer = require("multer");

const app = express();

// DB Config
const db = require("./src/backend/config/keys").mongoURI;

// Passport config
require("./src/backend/config/passport")(passport);

// connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(cors());
app.use(cookie());
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", __dirname + "/src/client/views");
app.use(express.static(__dirname + "/src/client"));
app.use(logger("dev"));

// EJS LAYOUTS
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

// Session implementation
app.use(
  session({
    secret: "jsdfpjwermv@#$asdog",
    resave: false,
    saveUninitialized: false,
    cookie: {
      path: "/",
      httpOnly: true,
      secure: false,
      maxAge: 3600000,
    },
  })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// connect flash middleware
app.use(flash());
// global variables. Creating our own middleware. Custom middleware coming from flash
app.use((req, res, next) => {
  // color code the message type
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

app.use("/", routes);
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("App started running at " + app.get("port"));
});

module.exports = app;
