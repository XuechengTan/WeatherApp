

import {Grid,AppBar} from '@material-ui/core'
import './App.css';
import './App.css';
import React from 'react';
import Navbar from './navbar/index'
import SearchView from './search/index'
import WeatherView from './weather/index';
import MapContainer from './map/index';
import axios from 'axios';
import News from './news/index';
import WeatherF from './forecast/index';
import Suggestion from './Suggestion/suggestion';


class App extends React.Component {
    state = {
        weather: null,
        weatherForecast: null,
        location: null,
        fail: null,
        suggestions:null
        
    }

    render() {
            this.getWeatherByLocation();
        return (
            <div className="App">
                <AppBar>
                    <Navbar />
                </AppBar>
                <Grid container spacing={3}>
                    <Grid item sm={4}>
                        <SearchView search={this.search}/>
                        <MapContainer ref= {c => this.map = c} />
                    </Grid>

                    <Grid item sm={3}>
                        <WeatherView ref= {c => this.weather = c} data = {this.state.weather}/>
                    </Grid>
                    <Grid item sm={3}>
                        <WeatherF ref= {c => this.weatherForecast = c}/>
                    </Grid>
                    <Grid item sm={1}>
                        < Suggestion ref = {c =>this.suggestions=c} data = {this.state.weather} />
                    </Grid>
                    <Grid item sm={12}>
                        <News ref= {c => this.news = c} />
                    </Grid>


                </Grid>
             
            </div>                     
        );
    }


    search = (content) => {
        console.log("content:" + content)
        const body = {
            city: content
        };
        //    search current weather
       axios.post("http://localhost:3001/weather",body).then((response)=>{
        //    check cityName weather exist or not
        if(response.data === "failed"){
            window.alert("Please input right city name!")
        }else{

        console.log( response.data);
        this.setState({weather:response.data})
        this.handleWeather(this.state.weather)
        this.handleMap(this.state.weather)
        this.handleNews(content)
        this.handleSuggestion(this.state.weather)

            // get weatherforecast
        axios.post("http://localhost:3001/weatherForecast",body).then((response)=>{
            console.log( response.data.list[0]);
               this.setState({weatherforecast:response.data})
               this.handleWeatherForecast (this.state.weatherforecast)
           });
        }
       });
    }


    // get weather and forecast by current location
    async getWeatherByLocation(){
        await navigator.geolocation.getCurrentPosition(this.showDefaultWeather);
    }
    showDefaultWeather=(position)=>{
        const dePos ={
           lat : position.coords.latitude,
           lng : position.coords.longitude
        }    
        axios.post("http://localhost:3001/defaultWeather",dePos).then((response)=>{
               this.handleWeather(response.data)
               this.handleNews(response.data.name)
               this.handleSuggestion(response.data)
           });
 
        //    get current position's weatherforecast
        axios.post("http://localhost:3001/defaultWeatherForecast", dePos).then((response) => {
            this.handleWeatherForecast(response.data)
        });

    }

    handleWeather = (weather) => {
        this.weather.refresh(weather)
    }

    handleWeatherForecast = (weather) => {
        this.weatherForecast.refresh(weather)
    }

    handleMap = (map) => {
        this.map.refresh([map.coord.lat, map.coord.lon])
    }
    handleNews = (news) => {
        this.news.refresh(news)
    }
    handleSuggestion = (suggestions) =>{
        this.suggestions.refresh(suggestions)
    }

}
export default App;