const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();
const checkCity = require('../models/init')
var mongoose = require('mongoose')

//search city weather 
router.post("/", function( req, res) {
    let city = req.body.city;

   
    //check city
     checkCity.exists({name:{$regex: new RegExp(`^${city}$`),$options:'i'}},function(err,docs){
        if(docs ==true){
            // get city weather
            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d2ae3ac1f6ff5f27e6857a661328554d`).then((response)=>{
                res.json(response.data);
            });
        }else{
            res.send("failed");
        }
    })

});

module.exports = router;
