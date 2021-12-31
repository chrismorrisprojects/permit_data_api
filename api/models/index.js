require('dotenv').config();
const env = process.env.NODE_ENV || 'development';
const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.PGDATABASE,process.env.PGUSER,process.env.PGPASSWORD, {
    host: process.env.PGHOST,
    dialect: "postgres",
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.rrc_uic = require("./rrcUic.js")(sequelize, Sequelize);
db.users = require("./users.js")(sequelize, Sequelize);

module.exports = db;
