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
   * /api/seat/{room}:
   *   get:
   *     description: Gets a specific seat by id
   *     produces:
   *       - application/json
   *     tags:
   *       - Seat
   *     parameters:
   *       - in: path
   *         name: room
   *         description: id of the seat
   *         
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: Seat object
   */
   app.get('/api/seat/:room', seats.getAll);

   /**
    * @swagger
    *
    * /api/seat/:
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
  app.post('/api/seat/', seats.addSeat);
  

  /**
   * @swagger
   *
   * /api/seat/{seat_id}:
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
   app.delete('/api/seat/:id', seats.removeSeat);

  /**
   * @swagger
   *
   * /api/seat/{seat_id}:
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
  app.put('/api/seat/:id', seats.putSeat)
};

