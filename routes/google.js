const router = require('express').Router();
const createError = require('http-errors')
var passport = require('passport');
require("dotenv").config();
var GoogleStrategy = require("passport-google-oauth20").Strategy;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("../utils/jwt");

const auth = require('../middlewares/auth')

router.use(passport.initialize());
router.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_S,
      callbackURL: "http://localhost:3000/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
        //console.log(accessToken);
        //console.log(refreshToken);
       // console.log(profile);
        //console.log(cb);
    //   User.findOrCreate({ googleId: profile.id },
    //    function (err, user) {
    //     return cb(err, user);
    //   });
    try {
      let data = await prisma.user.findUnique({
        where:{
          email:profile.emails[0].value
        }
      })
      //console.log(data);
      if(!data){
        const user =await prisma.user.create({
          data:{
            name:profile.displayName,
            username:profile.id,
            password:profile.id,
            bio:profile.photos[0].value,
            email:profile.emails[0].value
          }
        })
        user.accessToken = await jwt.signAccessToken(user);
        console.log("user",user)
        return cb(null,user)
      }else{
        data.accessToken = await jwt.signAccessToken(data);
        return cb(null,data)
      }
    } catch (e) {
      //throw createError(410,"something happen!")
      console.log(e)
      return cb(e,profile)
    }
    // Do all database saving stuff here
      return cb(null,profile)
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

router.get('/',
passport.authenticate('google', { scope: ["email", "profile"] }));

router.get('/callback',
passport.authenticate('google', {failureRedirect: '/login' }) , (req,res)=>{
  if (req.user) {
    res.json(req.user)
  }
  else{
    res.send("error")
  }
});
router.get('/logout',(req,res)=>{
  req.logout(function(err) {
    if (err) { return next(err); }
    //res.redirect('/');
  });
  res.send({
    "msg":"logged out!"
  })
})

// router.get('/profile',auth,(req,res)=>{
//   res.json(req.user);
// })





module.exports = router;