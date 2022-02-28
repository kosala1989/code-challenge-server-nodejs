const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");

router.get('/:id', async (req, res) => {
    let url =`${process.env.IOT_API_URL}/sensor/${req.params.id}`;
    console.log(`start to fetch data from :${url}`);
    try{
        let answer = await fetch(url);
        let response = await answer.json();
        res.send(response);
    }catch (e){
        console.log(`error while fetching data from ${url}. ${JSON.stringify(e)}`);
        res.status(500).send({message: 'Error while reading temperature'})
    }
});

module.exports = router;