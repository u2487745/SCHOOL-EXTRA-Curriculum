const Express = require("express");
const { CirculiumActivitiesCreate, Circulium_Activities_Find } = require("../controllers/SchoolActivities");
// const uploads = require("../service/imageService.js");
const ActivitiesRouter = Express.Router()
ActivitiesRouter.post('/Circulium/Activities/Create',CirculiumActivitiesCreate)
ActivitiesRouter.get('/Circulium/Activities/gets',Circulium_Activities_Find)
module.exports = ActivitiesRouter