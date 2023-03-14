const router = require('express').Router();
const user = require('../controllers/auth.controller');
const auth = require('../middlewares/auth');
// register
router.post('/', user.register);
// login
router.post('/login', user.login);
// all users
router.get('/all', auth, user.all);
//
router.get("/",(req,res)=>{
    res.send("use post for signup/login");
})

module.exports = router;