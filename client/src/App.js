

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
import { Link, Route } from 'react-router-dom';






// const weather = {"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":283.7,"feels_like":282.12,"temp_min":283.15,"temp_max":284.82,"pressure":1012,"humidity":50},"visibility":10000,"wind":{"speed":4.63,"deg":340},"clouds":{"all":99},"dt":1619714127,"sys":{"type":1,"id":1414,"country":"GB","sunrise":1619670947,"sunset":1619723979},"timezone":3600,"id":2643743,"name":"London","cod":200}

// const getLocation = () =>{
//
//     const geolocation = navigator.geolocation;
//     if (geolocation) {
//         geolocation.getCurrentPosition(findLocal, showEror);
//     }
//     function findLocal(position){
//         pos.lat = position.coords.latitude;
//         lat = position.coords.latitude;
//         pos.lng = position.coords.longitude;
//         lon = position.coords.longitude;
//     }
//     function showEror(){console.log(Error)}
//     return pos;
// };
//
// const myLocation = getLocation();
// function getPosition() {
//     // Simple wrapper
//     return new Promise((res, rej) => {
//         navigator.geolocation.getCurrentPosition(res, rej);
//     });
// }
//
// async function main() {
//     var position = await getPosition() ;// wait for getPosition to complete
//
//     // const pos = []
//     pos.lat = position.coords.latitude
//     pos.lng = position.coords.longitude
//     console.log(pos)
//     return pos
// }
// const myLocation = main();
//  function componentDidMount() {
//     let p = new Array(2);
//     navigator.geolocation.getCurrentPosition(function(position) {
//         console.log("Latitude is :", position.coords.latitude);
//         console.log("Longitude is :", position.coords.longitude);
//         p[0] = (position.coords.latitude)
//         p[1]= (position.coords.longitude)
//         console.log(p)
//     });
//
//      console.log(p+"2")
//     return p
// }
//  const myLocation = componentDidMount();
// let p = [];

class App extends React.Component {
    state = {
        weather: null,
        weatherForecast:null,
        location:null,
        errorCity: null
    }

    render() {
            this.getLocation();
        return (

            <div className="App">
                <Navbar />
                <Link to="/news">                
                <div><h1>News</h1></div>
                </Link>
                <Route path="/">
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <SearchView search={this.search} error={this.state.errorCity} />

                        <MapContainer ref= {c => this.map = c} />

                    </Grid>
                    <Grid item xs={4}>
                        <WeatherView ref= {c => this.weather = c} data = {this.state.weather}/>


                    </Grid>
                    <Grid item xs={4}>
                        <WeatherF ref= {c => this. weatherForecast = c}/>
                        </Grid>
                </Grid>
                </Route>
                <Route path="/news">                
                    <div>News 放在这</div>
                </Route>


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

        if(response.data.hasOwnProperty("error")){
            console.log(response.data.error);
            this.setState({
                errorCity: response.data.error
              })
        }  else{          
        console.log( response.data);
        this.setState({weather:response.data})
        this.handleWeather(this.state.weather)
        this.handleMap(this.state.weather)
        }
       });

        // forecast
       axios.post("http://localhost:3001/weatherForecast",body).then((response)=>{
        console.log( response.data.list[0]);
           this.setState({weatherforecast:response.data})
           this.handleWeatherForecast (this.state.weatherforecast)
       });



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

