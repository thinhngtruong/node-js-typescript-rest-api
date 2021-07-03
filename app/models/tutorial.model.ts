// Declare tutorial interface
export interface ITutorialAttributes {
  title: string;
  description: string;
  published: boolean;
}

module.exports = (sequelize, Sequelize) : ITutorialAttributes => {
  const Tutorial = <ITutorialAttributes> sequelize.define("tutorial", {
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
