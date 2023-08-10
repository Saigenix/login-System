const router = require('express').Router();
const createError = require('http-errors')
var passport = require('passport');
const jwt = require("../utils/jwt");
require("dotenv").config();


const checkUser = async(req,res,next)=>{
    // send token in authorization
    if (!req.headers.authorization) {
        return next(createError.Unauthorized('User is Not logged in to log out'))
    }
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
        return next(createError.Unauthorized("not logged in"))
    }
    await jwt.verifyAccessToken(token).then(user => {
        req.user = user
        next()
    }).catch (e => {
        next(createError.Unauthorized(e.message))
    })
    }
    
    


router.get('/',checkUser,(req,res)=>{
    res.json({
        data:"if you logged in with email then handel in frontend"
    })
})






module.exports = router;