module.exports = (sequelize, Sequelize) => {
    const Presets = sequelize.define("presets", {
        temp: {
            type: Sequelize.TINYINT
        },
        fan: {
            type: Sequelize.TINYINT
        },
        light: {
            type: Sequelize.TINYINT
        },
        seat: {
            type: Sequelize.TINYINT
        },
        user_id: {
            type: Sequelize.TINYINT
        }
    });

    return Presets;
};
