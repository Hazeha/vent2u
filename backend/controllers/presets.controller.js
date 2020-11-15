const db = require("../models");
const Preset = db.presets;
const Op = db.Sequelize.Op;

// Create and Send a new Preset TODO Should we have a create or should it be autoconfig?
exports.create = (req, res) => {
    // Validate request TODO Make validator.
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Preset data
    const preset = {};
    // Send Preset data to the database
    Preset.create(preset)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

// Get all Presets with user_id like user_id
exports.getPresets = (req, res) => {
    // TODO This Should be remade. so that logged in user id is user_id
    const user_id = req.params.user_id;

    Preset.findAll({ where: { user_id: user_id } }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while getting Presets!"
        });
    });
}
// Get specific preset by id
exports.getPreset = (req, res) => {
    const id = req.params.user_id;
    Preset.findByPk(id).then(data => {
        res.send(data);
    })
}

exports.putPreset = (req, res) => {
    const id = req.params.id;
    Preset.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Presets was updated successfully."
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
exports.listAllSeatsInRoom = (req, res) => {
    Preset.findAll({ where: { id: 1 } })
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
