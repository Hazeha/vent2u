const db = require("../models");
const Room = db.rooms;
const Op = db.Sequelize.Op;

exports.getByRoomId = (req, res) => {
    const userID = req.params.id;
    Room.findAll( { where : { user_id: userID}})// TODO set this to selected value
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
exports.getRoom = (req, res) => {
    const id = req.params.id;
    Room.findByPk(id).then((data) => {
        res.send(data);
    });
};

exports.addRoom = async (req, res) => {
    const {
        name,
        location,
        open,
    } = req.body;
    const newRoom = Room.build({
         name,
         location,
         open,
    });
    const result = await newRoom.save();
    res.status(201).send(result);
};

exports.removeRoom = async (req, res) => {
    const {
        id
    } = req.params;
    await Room.destroy({
        where: {
            id,
        },
    });

    res.status(200).send({
        id
    });
};

exports.putRoom = (req, res) => {
    const {
        id
    } = req.params;
    Room.update(req.body, {
            where: {
                id
            },
        })
        .then((num) => {
            if (num[0] === 1) {
                res.send({
                    message: 'Room was updated successfully.',
                });
            } else {
                res.send({
                    message: `Cannot update Room with id=${id}. Maybe Room was not found or req.body is empty!`,
                });
            }
        })
        .catch(() => {
            res.status(500).send({
                message: `Error updating Room with id=${id}`,
            });
        });
};
