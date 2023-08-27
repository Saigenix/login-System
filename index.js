const express = require("express");
const app = express();
const PORT = 3000;
// to parse the given json object 
const bodyParser = require("body-parser");
//const { auth } = require('express-openid-connect');
require("dotenv").config();
const session = require('express-session');

// using Static Route to show the public files /static
app.use("/static", express.static("public"));



// parse application/x-www-form-urlencoded
// using body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// using auth session middleware
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

// redirecting app to routes folder
const route = require("./routes");
app.use("/", route);

// app running 
app.listen(PORT, () => {
  //   console.log(`Example app listening on port ${port}`)
});
