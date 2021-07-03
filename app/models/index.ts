const dbConfig = require("../config/db.config");

import { Sequelize } from 'sequelize'

import { ITutorialAttributes } from "./tutorial.model";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

export interface IDbAttributes {
  Sequelize: Sequelize;
  sequelize: Sequelize;
  tutorials: ITutorialAttributes;
}

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  tutorials: require("./tutorial.model")(sequelize, Sequelize),
};

module.exports = db;
