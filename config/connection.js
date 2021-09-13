require('dotenv').config();

const Sequelize = require('sequelize');

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: 'localhost',
//       dialect: 'mysql',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });




// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize('just_tech_news_db', process.env.DB_USER, process.env.DB_PW,{
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;