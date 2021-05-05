const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();
const checkCity = require('../models/init')

//check city name in mongodb
async function cityExist(cityName) {
    return await checkCity.exists({ name: { $regex: new RegExp(`^${cityName}$`), $options: 'i' } });
}

//search city weather 
router.post("/", function(req, res) {
    //get cityname from frontend 
    const city = req.body.city;

    //check city, 
    const flag = cityExist(city);

    //get weather
    if (flag == true) {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d2ae3ac1f6ff5f27e6857a661328554d`).then((response) => {
            res.json(response.data);
        });
    } else {
        // if the city name does not in db return failed to front end.
        res.send("failed");
    }

});

module.exports = router;