const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
//const { auth } = require('express-openid-connect');
require("dotenv").config();
const session = require('express-session');
app.use("/static", express.static("public"));

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.AUTH_KEY,
//   baseURL: 'http://localhost:3000',
//   clientID: '1IYPqKxpV7viUgah8i4aV5leKyUhCVNp',
//   issuerBaseURL: 'https://dev-hrajmzc4mgwlczyo.us.auth0.com'
// };

//app.use(auth(config));
// app.get("/", (req, res) => {
//   res.send("Welcome to blog api");
// });
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

const route = require("./routes");
app.use("/", route);

// app.get("/posts", async (req, res) => {
//   try {
//     const post = await prisma.post.findMany({});
//     res.json(post);
//   } catch (error) {
//     next(error);
//   }
// });

app.listen(port, () => {
  //   console.log(`Example app listening on port ${port}`)
});
