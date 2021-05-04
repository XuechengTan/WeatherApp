

import Grid from '@material-ui/core/Grid'
import './App.css';

import './App.css';
import React from 'react';
import Navbar from './navbar/index'
import SearchView from './search/index'
import WeatherView from './weather/index';
import MapContainer from './map/index';
import axios from 'axios';

import WeatherF from'./forecast/index'
import { Link, Route,Redirect } from 'react-router-dom';

class App extends React.Component {
    state = {
        weather: null,
        weatherForecast:null,
        location:null,
        fail: null
       }

    render() {
            this.getLocation();
        return (

            <div className="App">
                <Navbar />

               

                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <SearchView search={this.search}  />

                        <MapContainer ref= {c => this.map = c} />

                    </Grid>
                    <Grid item xs={4}>
                        <WeatherView ref= {c => this.weather = c} data = {this.state.weather}/>


                    </Grid>
                    <Grid item xs={4}>
                        <WeatherF ref= {c => this.weatherForecast = c}/>
                        </Grid>
                </Grid>
             


            </div>
        );
    }


    search = (content) => {
        console.log("content:"+content)

        const body = {
            city: content
        };
        //    search current weather
       axios.post("http://localhost:3001/weather",body).then((response)=>{
        if(response.data == "failed"){
            window.alert("Please input right city name!")
        }else{

        console.log( response.data);
        this.setState({weather:response.data})
        this.handleWeather(this.state.weather)
        this.handleMap(this.state.weather)
        axios.post("http://localhost:3001/weatherForecast",body).then((response)=>{
            console.log( response.data.list[0]);
               this.setState({weatherforecast:response.data})
               this.handleWeatherForecast (this.state.weatherforecast)
           });
        }
       });

        // forecast
    //    axios.post("http://localhost:3001/weatherForecast",body).then((response)=>{
    //     console.log( response.data.list[0]);
    //        this.setState({weatherforecast:response.data})
    //        this.handleWeatherForecast (this.state.weatherforecast)
    //    });



    }

    async getLocation(){
        await navigator.geolocation.getCurrentPosition(this.showDefaultWeather);
    }
    
    showDefaultWeather=(position)=>{
        const dePos ={
           lat : position.coords.latitude,
           lng : position.coords.longitude
        }
       
        axios.post("http://localhost:3001/defaultWeather",dePos).then((response)=>{
               this.handleWeather(response.data)
           });

        
        axios.post("http://localhost:3001/defaultWeatherForecast",dePos).then((response)=>{
                this.handleWeatherForecast (response.data)
        });
        
    }


    handleWeather = (weather) => {
        this.weather.refresh(weather)
    }

    handleWeatherForecast = (weather) => {
        this.weatherForecast.refresh(weather)
    }

    handleMap = (map) => {
        this.map.refresh([map.coord.lat,map.coord.lon])
    }




}

export default App;

