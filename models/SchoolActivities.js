const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const CirculiumActivities = sequelize.define("CirculiumActivities", {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    des: { type: DataTypes.STRING, allowNull: false },
}, { tableName: "CirculiumActivities" }, { timestamps: true });
CirculiumActivities.sync()
// CirculiumActivities.drop()
module.exports = CirculiumActivities;