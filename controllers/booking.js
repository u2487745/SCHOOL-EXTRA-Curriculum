const Booking = require("../models/booking");
const { Op, or } = require("sequelize");
const users = require("../models/users");

exports.booking = async (req, res) => {
    var isUser = '' ;
    if (req.session.userId) {
        const name = await users.findByPk(req.session.userId)
         isUser = name.name
    }
    const create = await Booking.create(req.body)
    res.render('payment',{data:create,booking:"booking successfully.",name:isUser})
}
exports.bookingFind = async (req, res) => {
    const checkUserDetails = await Booking.findAll()
    res.send({ data: checkUserDetails })
}