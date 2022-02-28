const express = require('express');
const cors = require('cors');
const temperature = require('./routes/temperature');
const env = require('dotenv')
env.config();

const app = express();
app.use(cors());

app.use('/temperature', temperature);
const port = process.env.APPLICATION_PORT;

const server = app.listen(port, () => {
  console.log(`SensorTech server at http://localhost:${port}`);
});

module.exports = server;
