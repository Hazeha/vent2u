const db = require("../models");
const Vent = db.seats;
const Op = db.Sequelize.Op;

// Retrieve all Tutorials from the database.
exports.getAll = (req, res) => {
    const roomID = req.query.id;
    Vent.findAll( { where : { room: roomID}})// TODO set this to selected value
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};
