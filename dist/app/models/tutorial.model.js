"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    return Tutorial;
};
//# sourceMappingURL=tutorial.model.js.map