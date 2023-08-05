require('dotenv').config();
const { Sequelize } = require('sequelize');
const {
    DB_USER, DB_PASSWORD, DB_HOST,
  } = process.env;


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/psiconnection`, {
    logging: false,
    native: false,
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
});


module.exports = {
    ...sequelize.models,
    conn: sequelize,
}