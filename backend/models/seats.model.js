module.exports = (sequelize, Sequelize) => {
    const Vents = sequelize.define("vents", {
        room: {
            type: Sequelize.STRING
        },
        position: {
            type: Sequelize.STRING
        },
        temp: {
            type: Sequelize.STRING
        },
        fan: {
            type: Sequelize.STRING
        },
        user_id: {
            type: Sequelize.STRING
        },
    });

    return Vents;
};
