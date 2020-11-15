const Sequelize = require("sequelize");

//Credentials for database connection
const conn = new Sequelize('db_vent2u', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    port: 3307
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = conn;

db.presets = require("./presets.model.js")(conn, Sequelize);
db.user = require("./user.model.js")(conn, Sequelize);

module.exports = db;
