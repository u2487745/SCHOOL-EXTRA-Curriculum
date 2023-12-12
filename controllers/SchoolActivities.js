const CirculiumActivities = require("../models/SchoolActivities")

exports.CirculiumActivitiesCreate = async (req, res) => {
    const create = await CirculiumActivities.create(req.body)
    res.send({ data: create })
}
exports.Circulium_Activities_Find = async (req, res) => {
    const checkUserDetails = await CirculiumActivities.findAll()
    res.send({ data: checkUserDetails })
}