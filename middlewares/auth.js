const jwt = require('../utils/jwt')
const createError = require('http-errors')

const auth = async (req, res, next) => {
    // send token in authorization
    console.log(req.user) 
    if(req.user){
        next()
    }
    if (!req.headers.authorization) {
        return next(createError.Unauthorized("Access token is required OR you're not provided data"))
    }
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
        return next(createError.Unauthorized("Invalid Token!"))
    }
    await jwt.verifyAccessToken(token).then(user => {
        req.user = user
        next()
    }).catch (e => {
        next(createError.Unauthorized(e.message))
    })
}
module.exports = auth;