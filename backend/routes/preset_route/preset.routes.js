/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
module.exports = (app) => {
  const presets = require('../../controllers/presets.controller.js');
  /**
   * @swagger
   * tags: 
   *  name: Preset
   *  description: API to manage your users.
   */
  
  /**
   * @swagger
   *
   * /api/preset/{user_id}:
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
  app.get('/api/preset/:user_id', presets.getInfo);

  /**
   * @swagger
   *
   * /api/preset_specific/{preset_id}:
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
  app.get('/api/preset_specific/:preset_id', presets.getPreset);

   /**
   * @swagger
   *
   * /api/preset/:
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
  app.post('/api/preset/', presets.addPreset);

  /**
   * @swagger
   *
   * /api/preset/{preset_id}:
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
  app.delete('/api/preset/:id', presets.removePreset);

  /**
   * @swagger
   *
   * /api/preset/{preset_id}:
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
  app.put('/api/preset/:id', presets.putPreset)
};
