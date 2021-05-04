const { default: axios } = require("axios");
var express = require("express");

var router = express.Router();

let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/CityName');
mongoose.connection.on('open',function (error) {
    if(error){
    console.log("failed")
    }else{
        console.log("successfull")
    }
})

var Schema = mongoose.Schema;
var citySearch = new Schema({
      id: Number,
      name: String,
      state: String,
      country: String,
      coord: Object
});
var cityModel = mongoose.model("citynames",citySearch);



router.post("/", function( req, res) {
    console.log(req.body);
    let city = req.body.city;
    console.log ("获取citymingcheng"+city)
   


    cityModel.exists({name:{$regex: new RegExp(`^${city}$`),$options:'i'}},function(err,docs){
        if(docs ==true){
            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d2ae3ac1f6ff5f27e6857a661328554d`).then((response)=>{
                console.log("-------------------")
                console.log(response.data.name);
                console.log("-------------------")
                res.json(response.data);
            });
        }else{
            res.send("failed");
        }
    })

});

module.exports = router;
