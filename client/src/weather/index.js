import React from 'react';
import Style from './weather.module.css'

class Weather extends React.Component {
    state = {
        data: this.props.data
    }

    formatDate=(second) => {
        return new Date(parseInt(second) * 1000).Format("yyyy-MM-dd HH:mm:ss")
    }

    formatTemperature=(kelvin) => {
        return (kelvin -273.15).toFixed(1) + "°C"
    }

    refresh = (weather) => {
        this.setState({
            data:weather
        })
    }

    render() {
        if(this.state.data == null) {
            return(<div className="Weather"></div>)
        } else {
            const weatherIconUrl = "http://openweathermap.org/img/w/" + this.state.data.weather[0].icon + ".png"
            
            return (
                <div className="Weather">
                    <div className={Style.cityName}>{this.state.data.name}</div>
                    <br/>
                    <br/>
                    <span className={Style.weatherContent}>Country: {this.state.data.sys.country}</span>
                    <hr></hr>
                    <br/>
                    <div className={Style.weather}>
                        <div className={Style.weatherText}>
                            <span className={Style.weatherMain}>{this.state.data.weather[0].main}</span><br />
                            <br />
                            <span className={Style.weatherDescription}>{this.state.data.weather[0].description}</span>
                        </div>
                        <img alt={""}className={Style.weatherIcon} src={weatherIconUrl} width="100" height="100"/>
                    </div>
                    <span className={Style.weatherTitle}>Temperature:</span><br />
                    <span className={Style.weatherContent}>AVG: {this.formatTemperature(this.state.data.main.temp) }&emsp; MIN: {this.formatTemperature(this.state.data.main.temp_min) }&emsp; MAX: {this.formatTemperature(this.state.data.main.temp_max)}</span><br />
                    <span className={Style.weatherContent}>Feels Like: {this.formatTemperature(this.state.data.main.feels_like)}</span><br /><br />
                    <span className={Style.weatherTitle}>Humidity: </span>
                    <span className={Style.weatherContent}>{this.state.data.main.humidity}%</span>&emsp;
                    <br />
                    <span className={Style.weatherTitle}>Wind:</span><br />
                    <span className={Style.weatherContent}>Speed: {this.state.data.wind.speed}meter/sec</span>&emsp;
                    <span className={Style.weatherContent}>Direction: {this.state.data.wind.deg}(meteorological)</span>&emsp;
                    <br />
                    <span className={Style.weatherTitle}>Clouds: </span>
                    <span className={Style.weatherContent}>Cloudiness: {this.state.data.clouds.all}%</span><br />
                    <span className={Style.weatherTitle}>Sunrise Time:</span>
                    <span className={Style.weatherContent}> {this.formatDate(this.state.data.sys.sunrise)}</span><br />
                    <span className={Style.weatherTitle}>Sunset Time: </span>
                    <span className={Style.weatherContent}> {this.formatDate(this.state.data.sys.sunset)}</span>
                    <br />
                    <span className={Style.weatherTitle}>Time:</span>
                    <span className={Style.weatherContent}> { this.formatDate(this.state.data.dt )}</span>

                </div>
            );
        } 
    }
}

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

export default Weather;