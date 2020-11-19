/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
module.exports = (app) => {
  const presets = require('../../controllers/presets.controller.js');

  // Get user
  app.get('/preset/:user_id', presets.getInfo);
  app.post('/preset/', presets.addPreset);
  app.delete('/preset/:id', presets.removePreset);
};

// TODO In data base create trigger for activation of vents and seats.
