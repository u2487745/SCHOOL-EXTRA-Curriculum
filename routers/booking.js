const { booking, bookingFind } = require("../controllers/booking");
const Express = require("express");
// const uploads = require("../service/imageService.js");
const Router = Express.Router()
Router.post('/book',booking)
Router.get('/Booking-gets',bookingFind)
module.exports = Router