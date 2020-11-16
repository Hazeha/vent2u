module.exports = (sequelize, Sequelize) => {
    const Rooms = sequelize.define("rooms", {
        name: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.TINYINT
        },
        open: {
            type: Sequelize.BOOLEAN
        }
    });

    return Rooms;
};
