const { Op, or } = require("sequelize")
const users = require("../models/users.js")
const CirculiumActivities = require("../models/SchoolActivities.js")

exports.webSignup = async (req, res) => {
    res.render("user_insert", { message: "" })
}
exports.signup = async (req, res) => {
    const checkUserDetails = await users.findOne({ where: { [Op.or]: [{ email: req.body.email }, { name: req.body.name }] } });
    if (checkUserDetails) return res.render('user_insert', { message: "User Already Exist!" })
    const userDetails = await users.create(req.body)
    req.session.userId = userDetails.id
    res.redirect(`/`)
}
exports.loginPage = async (req, res) => {
    res.render("login", { message: "" })
}
exports.login = async (req, res) => {
    const checkUser = await users.findOne({ where: { email: req.body.email } })
    console.log("check user", checkUser);
    if (!checkUser || req.body.password !== checkUser.password) return res.render('login', { message: "Credentials Failed. Please Check Credentials!" });
    req.session.userId = checkUser.id
    res.redirect(`/`)
}
exports.logout = async (req, res) => {
    req.session.destroy()
    res.redirect("/");
}
