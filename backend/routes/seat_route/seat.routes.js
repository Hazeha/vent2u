/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
module.exports = (app) => {
  const seats = require('../../controllers/seats.controller.js');
  /**
   * @swagger
   * tags: 
   *  name: Seat
   *  description: API to manage your users.
   */

  /**
   * @swagger
   *
   * /seat_specific/{seat_id}:
   *   get:
   *     description: Gets a specific seat by id
   *     produces:
   *       - application/json
   *     tags:
   *       - Seat
   *     parameters:
   *       - in: path
   *         name: seat_id
   *         description: id of the seat
   *         
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: Seat object
   */
   app.get('/seat_specific/:id', seats.getSeat);

   /**
   * @swagger
   *
   * /seat/:
   *   post:
   *     description: Adds the seat
   *     produces:
   *       - application/json
   *     tags:
   *       - Seat
   *     requestBody:
   *       content:
   *         application/json:  
   *           schema:
   *             type: object
   *             properties:
   *               room:
   *                 type: string
   *               position:
   *                 type: string
   *               temp:
   *                 type: string
   *               fan:
   *                 type: string
   *               user_id:
   *                 type: string
   *     responses:
   *       200:
   *         description: Preset object
   */
   app.post('/seat/', seats.addSeat);

  /**
   * @swagger
   *
   * /seat/{seat_id}:
   *   delete:
   *     description: Deletes a specific seat
   *     produces:
   *       - application/json
   *     tags:
   *       - Seat
   *     parameters:
   *       - in: path
   *         name: seat_id
   *         description: id of the seat
   *         
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: id of the deleted seat
   */
   app.delete('/seat/:id', seats.removeSeat);

  /**
   * @swagger
   *
   * /seat/{seat_id}:
   *   put:
   *     description: Edit the Preset
   *     produces:
   *       - application/json
   *     tags:
   *       - Seat
   *     parameters:
   *       - in: path
   *         name: seat_id
   *         description: id of the preset
   *     requestBody:
   *       content:
   *         application/json:  
   *           schema:
   *             type: object
   *             properties:
   *               room:
   *                 type: string
   *               position:
   *                 type: string
   *               temp:
   *                 type: string
   *               fan:
   *                 type: string
   *               user_id:
   *                 type: string
   *     responses:
   *       200:
   *         description: Preset object
   */
  app.put('/seat/:id', seats.putSeat)
};

// TODO In data base create trigger for activation of vents and seats.
