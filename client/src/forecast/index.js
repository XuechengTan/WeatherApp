import React from 'react';
import Style from './forecast.module.css'
class WeatherForecast extends React.Component {
    state = {
        data: null
    }

    //formatDate
    formatDate=(second) => {
        return new Date(parseInt(second) * 1000).Format("yyyy-MM-dd HH:mm:ss")
    }

    //formatTemperature
    formatTemperature=(kelvin) => {
        return (kelvin -273.15).toFixed(1) + "°C"
    }

    //display the weatherForecast
    refresh = (weather) => {
        this.setState({
            data:weather
        })
    }

    render() {
        if(this.state.data == null) {
            return(<div className="Weather"></div>)
        } else {
            const weatherIconUrl24 = "http://openweathermap.org/img/w/" + this.state.data.list[8].weather[0].icon + ".png";
            const weatherIconUrl48 = "http://openweathermap.org/img/w/" + this.state.data.list[16].weather[0].icon + ".png"
            

            return (
                <div className="Weather">
                    <div className={Style.cityName}>24 Hours</div>
                    <div className={Style.weather}>
                        <div className={Style.weatherText}>
                            <span className={Style.weatherMain}>{this.state.data.list[8].weather[0].main}</span><br />
                            <span className={Style.weatherDescription}>{this.state.data.list[8].weather[0].description}</span>
                        </div>
                        <img alt={""} className={Style.weatherIcon} src={weatherIconUrl24} width="100" height="100"/>
                    </div>
                    <span className={Style.weatherTitle}>Temperature:</span><br />
                    <span className={Style.weatherContent}>AVG: {this.formatTemperature(this.state.data.list[8].main.temp) }&emsp; MIN: {this.formatTemperature(this.state.data.list[8].main.temp_min) }&emsp; MAX: {this.formatTemperature(this.state.data.list[8].main.temp_max)}</span><br />
                    <span className={Style.weatherContent}>Feels Like: {this.formatTemperature(this.state.data.list[12].main.feels_like)}</span><br />
                    <span className={Style.weatherTitle}>Humidity: </span>
                    <span className={Style.weatherContent}>{this.state.data.list[8].main.humidity}%</span>&emsp;
                    <br />
                    <span className={Style.weatherTitle}>Wind:</span><br />
                    <span className={Style.weatherContent}>Speed: {this.state.data.list[8].wind.speed}meter/sec</span>&emsp;
                    <span className={Style.weatherContent}>Direction: {this.state.data.list[8].wind.deg}(meteorological)</span>&emsp;
                    <br />
                    <br/>
                    <hr/>
                    <br/>
                    <div className={Style.cityName}>48 Hours</div>
                    <div className={Style.weather}>
                        <div className={Style.weatherText}>
                            <span className={Style.weatherMain}>{this.state.data.list[16].weather[0].main}</span><br />
                            <span className={Style.weatherDescription}>{this.state.data.list[16].weather[0].description}</span>
                        </div>
                        <img alt={""} className={Style.weatherIcon} src={weatherIconUrl48} width="100" height="100"/>
                    </div>
                    <span className={Style.weatherTitle}>Temperature:</span><br />
                    <span className={Style.weatherContent}>AVG: {this.formatTemperature(this.state.data.list[16].main.temp) }&emsp; MIN: {this.formatTemperature(this.state.data.list[16].main.temp_min) }&emsp; MAX: {this.formatTemperature(this.state.data.list[16].main.temp_max)}</span><br />
                    <span className={Style.weatherContent}>Feels Like: {this.formatTemperature(this.state.data.list[16].main.feels_like)}</span><br />
                    <span className={Style.weatherTitle}>Humidity: </span>
                    <span className={Style.weatherContent}>{this.state.data.list[20].main.humidity}%</span>&emsp;
                    <br />
                    <span className={Style.weatherTitle}>Wind:</span><br />
                    <span className={Style.weatherContent}>Speed: {this.state.data.list[16].wind.speed}meter/sec</span>&emsp;
                    <span className={Style.weatherContent}>Direction: {this.state.data.list[16].wind.deg}(meteorological)</span>&emsp;
                    <br />
                </div>
            );
        } 
    }
}

// time display in normal mode
// eslint-disable-next-line
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "H+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

export default WeatherForecast;