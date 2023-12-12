const { Sequelize ,DataTypes} = require("sequelize");
const sequelize = require("../config/db.js");

const Booking =  sequelize.define("book",{
    id: { type: Sequelize.INTEGER,autoIncrement: true, primaryKey: true},
    Fname:{type:DataTypes.STRING, allowNull: false},
    Lname:{type:DataTypes.STRING, allowNull: false},
    email:{type:DataTypes.STRING, allowNull: false},
    number:{type:DataTypes.STRING, allowNull: false},
    class:{type:DataTypes.STRING, allowNull: false},
    city:{type:DataTypes.STRING, allowNull: false},
    schooling:{type:DataTypes.BOOLEAN, allowNull: false, defaultValue:false},
    teacherInvolvement:{type:DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    note:{type:DataTypes.STRING, allowNull: false},
},{tableName:"book"}, {timestamps: true});
Booking.sync()
// Booking.drop()
module.exports = Booking;