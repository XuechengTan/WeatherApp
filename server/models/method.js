let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/CityName');
mongoose.connection.on('open',function (error) {
    if(error){
    console.log("failed")
    }else{
        console.log("successfull")
    }
})
//operate db
    var Schema = mongoose.Schema;
    var citySearch = new Schema({
          id: Number,
          name: String,
          state: String,
          country: String,
          coord: Object
    });
    var cityModel = mongoose.model("citynames",citySearch);
      cityModel.find({name:'London'},function(err,docs){
        if(!err){    
          console.log(docs+"没找到");
        }else{
            console.log(docs+"没找到");
        }
      })

  


