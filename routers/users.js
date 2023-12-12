const Express = require("express");
const { login, loginPage, signup, webSignup, logout } = require("../controllers/users.js");
const userRouter = Express.Router()
userRouter.post('/user/insert',signup)
userRouter.get('/user/insert',webSignup)

//login 
userRouter.post('/user/login',login)
userRouter.get('/user/login',loginPage)

userRouter.post('/user/logout',logout)
module.exports = userRouter;