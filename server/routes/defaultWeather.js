var express = require('express');
var router = express.Router();
const { default: axios } = require("axios");
// import Geolocation from 'react-native-geolocation-service';


router.post("/", function(req, res) {

    console.log(`http://api.openweathermap.org/data/2.5/weather?lat=${req.body.lat}&lon=${req.body.lng}&appid=d2ae3ac1f6ff5f27e6857a661328554d`);
    // res.send("666")
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${req.body.lat}&lon=${req.body.lng}&appid=d2ae3ac1f6ff5f27e6857a661328554d`).then((response)=>{
            console.log(response.data)
            res.send(response.data)
        });

});



module.exports = router;