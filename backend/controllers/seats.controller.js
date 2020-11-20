const db = require("../models");
const Seat = db.seats;
const Op = db.Sequelize.Op;

// Retrieve all Tutorials from the database.
exports.getAll = (req, res) => {
    const room = req.params.room;
    Seat.findAll( { where : { room: room }})// TODO set this to selected value
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

// Retrieve all Tutorials from the database.
exports.getSeat = (req, res) => {
    const id = req.params.id;
    Seat.findByPk(id).then((data) => {
        res.send(data);
    });
};

exports.addSeat = async (req, res) => {
    const {
        room,
        position,
        temp,
        fan,
        user_id
    } = req.body;
    const newSeat = Seat.build({
         room,
         position,
         temp,
         fan,
         user_id
    });
    const result = await newSeat.save();
    res.status(201).send(result);
};

exports.removeSeat = async (req, res) => {
    const {
        id
    } = req.params;
    await Seat.destroy({
        where: {
            id,
        },
    });

    res.status(200).send({
        id
    });
};

exports.putSeat = (req, res) => {
    const {
        id
    } = req.params;
    Seat.update(req.body, {
            where: {
                id
            },
        })
        .then((num) => {
            if (num[0] === 1) {
                res.send({
                    message: 'Seat was updated successfully.',
                });
            } else {
                res.send({
                    message: `Cannot update Seat with id=${id}. Maybe Preset was not found or req.body is empty!`,
                });
            }
        })
        .catch(() => {
            res.status(500).send({
                message: `Error updating Seat with id=${id}`,
            });
        });
};
