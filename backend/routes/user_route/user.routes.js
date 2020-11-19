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
   * /user/{id}:
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
  app.get('/user/:id', user.getInfo);

  /**
   * @swagger
   *
   * /user/:
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
  app.post('/user/', user.addUser);

  /**
  * @swagger
  *
  * /user/{id}:
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
  app.delete('/user/:id', user.removeUser);
};

// TODO In data base create trigger for activation of vents and seats.
