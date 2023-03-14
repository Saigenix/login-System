const express = require('express');

const router = express.Router();
const authCheck = require('../middlewares/auth');
const auth = require('./auth');
const google = require('./google');
const profile = require('./profile');
const logout = require('./logout')
const createError = require('http-errors')
// const { requiresAuth } = require('express-openid-connect');


// router.get('/profile', requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });

router.use('/auth', auth);
router.use('/google',google);
router.use('/profile',profile);
router.use('/logout',logout)
router.get('/',authCheck, (req,res)=>{
    res.json({
        "msg":"your logged in to logout use /logout",
        data:req.user
    })
})

// this for invalid routes 
router.use( async (req, res, next) => {
    next(createError.NotFound('Route not Found'))
})

// in this function err is came from above next 
router.use( (err, req, res, next) => {
    res.status(err.status || 500).json({
        status: false,
        message: err.message
    })
})
module.exports = router;