module.exports = (sequelize, Sequelize) => {
  const Seats = sequelize.define('seats', {
    room: {
      type: Sequelize.STRING,
    },
    position: {
      type: Sequelize.STRING,
    },
    temp: {
      type: Sequelize.STRING,
    },
    fan: {
      type: Sequelize.STRING,
    },
    user_id: {
      type: Sequelize.STRING,
    },
  });

  return Seats;
};
