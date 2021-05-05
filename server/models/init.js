const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const citySearch = new Schema({
          id: Number,
          name: String,
          state: String,
          country: String,
          coord: Object
});
    
 module.exports= mongoose.model("citynames",citySearch);

  


