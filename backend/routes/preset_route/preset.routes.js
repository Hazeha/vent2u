/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
module.exports = (app) => {
  const presets = require('../../controllers/presets.controller.js');
  /**
   * @swagger
   * tags: 
   *  name: User
   *  description: API to manage your users.
   */
  
  /**
   * @swagger
   *
   * /preset/{user_id}:
   *   get:
   *     description: Gets presets for a specific user
   *     produces:
   *       - application/json
   *     tags:
   *       - Preset
   *     parameters:
   *       - in: path
   *         name: user_id
   *         description: id of the user
   *         
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: List of Presets
   */
  app.get('/preset/:user_id', presets.getInfo);

  /**
   * @swagger
   *
   * /preset_specific/{preset_id}:
   *   get:
   *     description: Gets a specific vent by id
   *     produces:
   *       - application/json
   *     tags:
   *       - Preset
   *     parameters:
   *       - in: path
   *         name: preset_id
   *         description: id of the preset
   *         
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: List of Presets
   */
  app.get('/preset_specific/:preset_id', presets.getPreset);

   /**
   * @swagger
   *
   * /preset/:
   *   post:
   *     description: Adds the Preset
   *     produces:
   *       - application/json
   *     tags:
   *       - Preset
   *     requestBody:
   *       content:
   *         application/json:  
   *           schema:
   *             type: object
   *             properties:
   *               temp:
   *                 type: integer
   *               fan:
   *                 type: integer
   *               light:
   *                 type: integer
   *               seat:
   *                 type: integer
   *               user_id:
   *                 type: integer
   *     responses:
   *       200:
   *         description: Preset object
   */
  app.post('/preset/', presets.addPreset);

  /**
   * @swagger
   *
   * /preset/{preset_id}:
   *   delete:
   *     description: Deletes a specific preset
   *     produces:
   *       - application/json
   *     tags:
   *       - Preset
   *     parameters:
   *       - in: path
   *         name: preset_id
   *         description: id of the preset
   *         
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: id of the deleted preset
   */
  app.delete('/preset/:id', presets.removePreset);

  /**
   * @swagger
   *
   * /preset/{preset_id}:
   *   put:
   *     description: Edit the Preset
   *     produces:
   *       - application/json
   *     tags:
   *       - Preset
   *     parameters:
   *       - in: path
   *         name: preset_id
   *         description: id of the preset
   *     requestBody:
   *       content:
   *         application/json:  
   *           schema:
   *             type: object
   *             properties:
   *               temp:
   *                 type: integer
   *               fan:
   *                 type: integer
   *               light:
   *                 type: integer
   *               seat:
   *                 type: integer
   *               user_id:
   *                 type: integer
   *     responses:
   *       200:
   *         description: Preset object
   */
  app.put('/preset/:id', presets.putPreset)
};

// TODO In data base create trigger for activation of vents and seats.
