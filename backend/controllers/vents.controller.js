
const db = require("../models");
const Vent = db.vents;
const Op = db.Sequelize.Op;

// Retrieve all Tutorials from the database.
exports.getAll = (req, res) => {
    const roomID = req.query.id;
    Vent.findAll( { where : { room: 1}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Seats."
            });
        });
};
exports.putVent = (req, res) => {
    const id = req.params.id;
    Vent.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Seat was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Presets with id=${id}. Maybe Preset was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Preset with id=" + id
            });
        });
};

