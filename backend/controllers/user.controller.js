const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

// TODO Make some kind of login service!
exports.getInfo = (req, res) => {
    const testUserId = req.params.id;
    // TODO Make this throw error if no user is found.
    // This is not needed atm. Header does already show "login" if currentUser = Null
    if (testUserId === 0){
        res.status(400).send({
            message: "Chose a user id!"
        });
    }

    // Finds user by id and returns json data with the users data
    User.findByPk(testUserId).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving User with id=" + testUserId
        });
    })
}
