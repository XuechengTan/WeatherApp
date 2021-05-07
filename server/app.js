var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var mongoose = require('mongoose');


var weatherRouter = require("./routes/weather");
var weatherForecastRouter = require("./routes/weatherForecast");
var defaultWeatherRouter = require("./routes/defaultWeather");
var defaultWeatherForecastRouter = require("./routes/defaultWeatherForecast");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors({
  //specify the address
  origin:['http://localhost:3000'], 
    //Specifies the type of request to receive
  methods:['GET','POST'], 
  // specify the header
  alloweHeaders:['Content-Type','Authorization'] 
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use("/weather", weatherRouter);
app.use('/weatherForecast',weatherForecastRouter);
app.use('/defaultWeather',defaultWeatherRouter);
app.use('/defaultWeatherForecast',defaultWeatherForecastRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// connect database
mongoose.connect('mongodb://localhost:27017/CityName');
mongoose.connection.on('open',function (error) {
    if(error){
    console.log("failed")
    }else{
        console.log("successful")
    }
})

module.exports = app;
