const { Sequelize ,DataTypes} = require("sequelize");
const sequelize = require("../config/db.js");

const users =  sequelize.define("User",{
    id: { type: Sequelize.INTEGER,autoIncrement: true, primaryKey: true},
    name:{type:DataTypes.STRING, allowNull: false},
    password:{type:DataTypes.STRING, allowNull: false},
    email:{type:DataTypes.STRING, allowNull: false},
    number:{type:DataTypes.STRING, allowNull: false},
},{tableName:"User"}, {timestamps: true});
users.sync()
// users.drop()
module.exports= users;