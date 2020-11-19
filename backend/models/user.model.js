module.exports = (sequelize, Sequelize) => {
  /**
   * @swagger
   * components:
   *   schemas:
   *     User:
   *       type: object
   *       properties:
   *         id:
   *           type: integer
   *           description: User id
   *         username:
   *           type: string
   *           description: Users username
   *         password:
   *           type: string
   *           description: Users password
   *         first_name:
   *           type: string
   *           description: Users firstname
   *         last_name:
   *           type: string
   *           description: Users lastname
   *         createdAt:
   *           type: string
   *           description: DateTime created
   *         updatedAt: 
   *           type: string
   *           description: DateTime updated
   */
  const User = sequelize.define('user', {
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
