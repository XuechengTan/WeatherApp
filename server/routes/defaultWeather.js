var express = require('express');
var router = express.Router();
const { default: axios } = require("axios");

router.post("/", function(req, res) {

   
//return defaultWeather
axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${req.body.lat}&lon=${req.body.lng}&appid=d2ae3ac1f6ff5f27e6857a661328554d`).then((response)=>{
            res.send(response.data)
        });

});

module.exports = router;