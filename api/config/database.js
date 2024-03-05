const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
  }
);
//console.log(" database username : " +process.env.DB_USERNAME +"  password :" +process.env.DB_PASSWORD  +"  database :"  + process.env.DB_DATABASE);

module.exports = { sequelize };
