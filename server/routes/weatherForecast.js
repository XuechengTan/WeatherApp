var express = require('express');
var router = express.Router();
const { default: axios } = require("axios");

router.post("/", function(req, res) {

  city = req.body.city;

  //get weather forecast
   axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d2ae3ac1f6ff5f27e6857a661328554d`).then((response)=>{
              res.json(response.data);
          });
});


module.exports = router;