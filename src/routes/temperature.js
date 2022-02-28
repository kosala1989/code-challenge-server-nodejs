const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");

router.get('/:id', async (req, res) => {
    fetch(`${process.env.IOT_API_URL}/sensor/${req.params.id}`)
        .then((response) => response.json())
        .then((response) => res.send(response));
});

module.exports = router;