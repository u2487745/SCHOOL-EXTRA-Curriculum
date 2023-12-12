const express = require('express');
const cors = require("cors");
const sequelize = require('./config/db');
const session = require("express-session");
const bodyParser = require('body-parser');
const Router = require('./routers/booking');
const ActivitiesRouter = require('./routers/SchoolActivities');
const CirculiumActivities = require('./models/SchoolActivities');
const userRouter = require('./routers/users');
const users = require('./models/users');
const app = express()
app.use(express.json())
app.use(cors())
app.set('trust proxy', 1);
app.set("view engine", "ejs")
app.use(express.static('views'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
    secret: 'session-keys',
    resave: true,
    saveUninitialized: true,
}))
app.use(Router)
app.use(userRouter)
app.use(ActivitiesRouter)
app.get('/', async (req, res) => {
    const checkUserDetails = await CirculiumActivities.findAll()
    if (req.session.userId) {
        const name = await users.findByPk(req.session.userId)
        var isUser = '' || name.name
    }
    res.render('index', { data: checkUserDetails, name: isUser })
})
app.get('/activities', async (req, res) => {
    var isUser = '';
    if (req.session.userId) {
        const name = await users.findByPk(req.session.userId)
        isUser = name.name
    }
    res.render('activities', { name: isUser })
});
app.get('/gallery', async (req, res) => {
    var isUser = '';
    if (req.session.userId) {
        const name = await users.findByPk(req.session.userId)
        isUser = name.name
    }
    res.render('gallery', { name: isUser })
})

app.get('/book', async (req, res) => {
    var isUser = '';
    if (req.session.userId) {
        const name = await users.findByPk(req.session.userId)
        isUser = name.name
    }
    res.render('book', { message: "", data: null, name: isUser, booking: '' })
});
app.get('/payment', async (req, res) => {
    var isUser = '' ;
    if (req.session.userId) {
        const name = await users.findByPk(req.session.userId)
         isUser = name.name
    }
    res.render('payment',{name:isUser}) 
})
app.listen(8080, () => console.log("server run PORT: 8080"))