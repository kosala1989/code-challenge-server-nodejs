const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const env = require('dotenv')
env.config();

const app = express();
const port = process.env.APPLICATION_PORT;

app.use(cors());

app.get('/temperature/:id', (req, res) => {
  fetch(
    `${process.env.IOT_API_URL}/sensor/${req.params.id}`
  )
    .then((response) => response.json())
    .then((response) => res.send(response));
});

const server = app.listen(port, () => {
  console.log(`SensorTech server at http://localhost:${port}`);
});

module.exports = server;
