const router = require('express').Router();
const createError = require('http-errors')
var passport = require('passport');
const authCheck = require('../middlewares/auth');
require("dotenv").config();

router.get('/',authCheck,(req,res)=>{
    res.json(req.user);
})








module.exports = router;