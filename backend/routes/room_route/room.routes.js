/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
module.exports = (app) => {
  const rooms = require('../../controllers/rooms.controller.js');
  /**
   * @swagger
   * tags: 
   *  name: room
   *  description: API to manage your users.
   */
  
  //app.get('/room/:id', rooms.getInfo);
  /**
   * @swagger
   *
   * /api/room/{room_id}:
   *   get:
   *     description: Gets a specific vent by id
   *     produces:
   *       - application/json
   *     tags:
   *       - room
   *     parameters:
   *       - in: path
   *         name: room_id
   *         description: id of the room
   *         
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: List of rooms
   */
  app.get('/api/room/:id', rooms.getRoom);

    /**
     * @swagger
     *
     * /api/rooms:
     *   get:
     *     description: Gets all rooms
     *     produces:
     *       - application/json
     *     tags:
     *       - room
     *     responses:
     *       200:
     *         description: List of rooms
     */
    app.get('/api/rooms', rooms.getRooms);

   /**
   * @swagger
   *
   * /api/room/:
   *   post:
   *     description: Adds the room
   *     produces:
   *       - application/json
   *     tags:
   *       - room
   *     requestBody:
   *       content:
   *         application/json:  
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *               location:
   *                 type: integer
   *               open:
   *                 type: integer
   *     responses:
   *       200:
   *         description: room object
   */
  app.post('/api/room/', rooms.addRoom);

  /**
   * @swagger
   *
   * /api/room/{room_id}:
   *   delete:
   *     description: Deletes a specific room
   *     produces:
   *       - application/json
   *     tags:
   *       - room
   *     parameters:
   *       - in: path
   *         name: room_id
   *         description: id of the room
   *         
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: id of the deleted room
   */
   app.delete('/api/room/:id', rooms.removeRoom);

  /**
   * @swagger
   *
   * /api/room/{room_id}:
   *   put:
   *     description: Edit the room
   *     produces:
   *       - application/json
   *     tags:
   *       - room
   *     parameters:
   *       - in: path
   *         name: room_id
   *         description: id of the room
   *     requestBody:
   *       content:
   *         application/json:  
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *               location:
   *                 type: integer
   *               open:
   *                 type: integer
   *     responses:
   *       200:
   *         description: room object
   */
  app.put('/api/room/:id', rooms.putRoom)
};

// TODO In data base create trigger for activation of vents and rooms.
