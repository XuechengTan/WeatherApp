import * as React from "react";
import {render} from "@testing-library/react";


class weatherByCity extends React.Component{

    weatherInfo = async () =>{
        const weatherInfo=await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=7ded20c3fd698fee9db45b8dd2d482a5')
        const weatherData = await weatherInfo.json()
        console.log(weatherData)
        return weatherData
    }

    render() {
        const weatherIconUrl = "http://openweathermap.org/img/w/" + this.props.data.weather[0].icon + ".png"
        return (
            <div className="Weather">
                <span className="WeatherTitle">{this.props.data.name}</span><br />
                <span className="WeatherTitle">{this.props.data.weather[0].main}</span><br />
                <img src={weatherIconUrl} width="100" height="100"/>
                <span className="WeatherSubtitle">{this.props.data.weather[0].description}</span><br/>
                <span className="WeatherSubtitle">Temperature: {this.props.data.main.temp}([{this.props.data.main.temp_min}, {this.props.data.main.temp_max}])</span>
                <span className="WeatherSubtitle">Feels Like: {this.props.data.main.feels_like}</span>
                <span className="WeatherSubtitle">Humidity: {this.props.data.main.humidity}</span>
                <span className="WeatherSubtitle">Sea Level: {this.props.data.main.sea_level}</span>
                <span className="WeatherSubtitle">Grnd Level: {this.props.data.main.grnd_level}</span>
                <br />
                <span className="WeatherSubtitle">Wind Speed: {this.props.data.wind.speed}</span>
                <span className="WeatherSubtitle">Wind Direction: {this.props.data.wind.deg}</span>
                <span className="WeatherSubtitle">Wind Gust: {this.props.data.wind.gust}</span>
                <br />
                <span className="WeatherSubtitle">Clouds: {this.props.data.clouds.all}</span>
                <br />
                <span className="WeatherSubtitle">Rain: {this.props.data.rain}</span>
                <br />
                <span className="WeatherSubtitle">Snow: {this.props.data.snow}</span>
                <br />
                <span className="WeatherSubtitle">Sunrise Time: {this.props.data.sys.sunrise}</span>
                <span className="WeatherSubtitle">Sunset Time: {this.props.data.sys.sunset}</span>
                <br />
                <span className="WeatherSubtitle">Time: {this.props.data.dt}</span>
            </div>
        );
    }

}
export default weatherByCity
