/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
module.exports = (app) => {
  const user = require('../../controllers/user.controller.js');

  // Get user
  app.get('/user/:id', user.getInfo);
  app.post('/user/', user.addUser);
  app.delete('/user/:id', user.removeUser);
};

// TODO In data base create trigger for activation of vents and seats.
