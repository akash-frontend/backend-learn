// Destructuring because not default export
const { Sequelize } = require("sequelize");

// Create new sequalize object
const createDB = new Sequelize("test-db", "user", "pass", {
  dialect: "sqlite",
  host: "./config/db.sqlite",
});

// To make it compatible with sQLite
// dialect : "sqlite"
// To change it to postgres Or mysql
// simply change dialect with postgres Or mysql 

module.exports = createDB;