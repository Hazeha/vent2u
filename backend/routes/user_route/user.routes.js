/* eslint-disable global-require */
/* eslint-disable no-unused-vars */

module.exports = (app) => {
  const user = require('../../controllers/user.controller.js');

/**
 * @swagger
 * tags: 
 *  name: User
 *  description: API to manage your users.
 */

  /**
   * @swagger
   *
   * /api/user/{id}:
   *   get:
   *     description: Gets the user
   *     produces:
   *       - application/json
   *     tags:
   *       - User
   *     parameters:
   *       - in: path
   *         name: id
   *         description: Users id
   *         
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: User object
   */
  app.get('/api/user/:id', user.getInfo);

  /**
   * @swagger
   *
   * /api/user/:
   *   post:
   *     description: Gets the user
   *     produces:
   *       - application/json
   *     tags:
   *       - User
   *     requestBody:
   *       content:
   *         application/json:  
   *           schema:
   *             type: object
   *             properties:
   *               first_name:
   *                 type: string
   *               last_name:
   *                 type: string
   *               username:
   *                 type: string
   *               password:
   *                 type: string
   *     responses:
   *       200:
   *         description: User object
   */
  app.post('/api/user/', user.addUser);

  /**
  * @swagger
  *
  * /api/user/{id}:
  *   delete:
  *     description: Deletes user
  *     produces:
  *       - application/json
  *     tags:
  *       - User
  *     parameters:
  *       - in: path
  *         name: id
  *         description: Users id
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: User object
  */
  app.delete('/api/user/:id', user.removeUser);
};

// TODO In data base create trigger for activation of vents and seats.
