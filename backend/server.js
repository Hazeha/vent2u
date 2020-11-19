const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require("swagger-jsdoc")
const app = express();
const options = require("./swagger.options.js")

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
app.use(cors());

const db = require('./models');

db.sequelize.sync();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Backend Connected.' });
});

require('./routes/user_route/user.routes.js')(app);
require('./routes/preset_route/preset.routes.js')(app);

module.exports = app;
