// connect mongodb
let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/runoob');
mongoose.connection.on('open',function (error) {
    if(error){
    console.log("failed")
    }else{
        console.log("successfull")
    }
})


exports.mongoose = mongoose;