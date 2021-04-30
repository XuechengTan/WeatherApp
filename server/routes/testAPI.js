const { default: axios } = require("axios");
const { request, response } = require("express");
var express = require("express");
var router = express.Router();


router.post("/", function(req, res) {

    console.log(req.body);
    city = req.body.city;
    console.log ("获取citymingcheng"+city)
 

     axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d2ae3ac1f6ff5f27e6857a661328554d`).then((response)=>{
            console.log("-------------------")
                console.log(response.data)
                console.log("-------------------")
                res.json(response.data);
            });
   
        

    

});

module.exports = router;
