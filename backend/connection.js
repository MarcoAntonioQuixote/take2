const { Sequelize } = require("sequelize");
const dotenv = require('dotenv');
dotenv.config();

const db = process.env.db;
const dbUser = process.env.dbUser;
const dbPassword = process.env.dbPassword;
const dbHost = process.env.dbHost;

const sequelize = new Sequelize(db,dbUser,dbPassword,{
    host: dbHost,
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    },
    logging: false
})

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connected to online db');
    } catch (err) {
        console.log('Connection failed: ', err)
    }
}

module.exports = {
    sequelize,
    testConnection,
};