"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig = require("../config/db.config");
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});
const db = {
    Sequelize: sequelize_1.Sequelize,
    sequelize: sequelize,
    tutorials: require("./tutorial.model")(sequelize, sequelize_1.Sequelize),
};
module.exports = db;
//# sourceMappingURL=index.js.map