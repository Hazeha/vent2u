/* eslint-disable camelcase */
const db = require('../models');

const User = db.user;

// TODO Make some kind of login service!
exports.getInfo = (req, res) => {
  const testUserId = req.params.id;
  // TODO Make this throw error if no user is found.
  // This is not needed atm. Header does already show "login" if currentUser = Null
  if (testUserId === 0) {
    res.status(400).send({
      message: 'Chose a user id!',
    });
  }

  // Finds user by id and returns json data with the users data
  User.findByPk(testUserId).then((data) => {
    res.send(data);
  }).catch(() => {
    res.status(500).send({
      message: `Error retrieving User with id=${testUserId}`,
    });
  });
};

exports.addUser = async (req, res) => {
  const {
    username, first_name, last_name, password,
  } = req.body;
  const newUser = User.build({
    first_name,
    last_name,
    username,
    password,
  });
  const result = await newUser.save();
  res.status(201).send(result.dataValues);
};

exports.removeUser = async (req, res) => {
  const { id } = req.params;
  await User.destroy({
    where: {
      id,
    },
  });

  res.status(200).send({ id });
};
