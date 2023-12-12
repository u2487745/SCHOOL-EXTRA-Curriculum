const Sequelize  = require("sequelize");
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password:"",
    database:"school",
    logging: false,
});
sequelize.authenticate().then(() => {
    console.log("Database connected successfully");
}).catch((error) => console.log(`Database Connection ERROR : ${error}`))
module.exports = sequelize