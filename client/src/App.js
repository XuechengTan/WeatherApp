
import Grid from '@material-ui/core/Grid'
import './App.css';

import './App.css';
import React from 'react';
import Navbar from './navbar/index'
import SearchView from './search/index'
import WeatherView from './weather/index';
import MapContainer from './map/index';
import axios from 'axios';
import WeatherForecast from'./weatherforecast/index'

 
  
import Geolocation from 'react-native-geolocation-service';




// const weather = {"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":283.7,"feels_like":282.12,"temp_min":283.15,"temp_max":284.82,"pressure":1012,"humidity":50},"visibility":10000,"wind":{"speed":4.63,"deg":340},"clouds":{"all":99},"dt":1619714127,"sys":{"type":1,"id":1414,"country":"GB","sunrise":1619670947,"sunset":1619723979},"timezone":3600,"id":2643743,"name":"London","cod":200}



// const ation = async ()=> {
//   await Geolocation.getCurrentPosition(
//        location => {
//            var result = location.coords.longitude
//             return result
//         },
//         error => {
//           alert("获取位置失败："+ error)
//         }
//     );
//  }

// const lng = ation();


// const ation1 = async ()=> {
//     await Geolocation.getCurrentPosition(
//          location => {
//              var result = location.coords.latitude;
//               return result
//           },
//           error => {
//             alert("获取位置失败："+ error)
//           }
//       );
//    }
  
//   const lat = ation();


const getLocation =  () =>{
    const pos = {};
    const geolocation = navigator.geolocation;
    if (geolocation) {
        geolocation.getCurrentPosition(findLocal, showEror);

    }
   function findLocal(position){
        pos.lat =  position.coords.latitude;
        pos.lng =  position.coords.longitude;
    }
    function showEror(){console.log(Error)}  

    return pos;

};

const myLocation = getLocation();

// const getLocation111 =  () =>{
//     const pos = {};
//     var zzz={};
//     const geolocation = navigator.geolocation;
//     if (geolocation) {
//         geolocation.getCurrentPosition(findLocal);

//     }
//    function findLocal(position){
//         pos.lat =  position.coords.latitude;
//         pos.lng =  position.coords.longitude;
//         axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lng}&appid=d2ae3ac1f6ff5f27e6857a661328554d`).then((response)=>{
//                 console.log(response.data)
//               zzz = response.data
//                 return response.data;
//         });
//     }
//             return zzz;

// };
// const myLocation111 = getLocation111();












class App extends React.Component {
    state = {
        weather: null,
        location: myLocation,
        weatherforecast:null
    }

    
    render() {
        this.getLocation();
        return (
            <div className="App">
                <Navbar />
                
                {console.log(this.state.aaaa)}
                <div>
                    <h1>{this.state.aaaa}</h1>
                </div>

                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <SearchView search={this.search}/>
                        <MapContainer ref= {c => this.map = c} lo={myLocation}/>
                    </Grid>
                    <Grid item xs={4}>
                        <WeatherView ref= {c => this.weather = c}  />
                            
                    </Grid>
                    <Grid item xs={4}>
                        <WeatherForecast ref= {c => this. weatherforecast = c}/>
                        </Grid>
                </Grid>
                <div>
                    
                </div>
            </div>
        );
    }

   search =  (content) => {
        console.log("content:"+content)
        
        const body = {
            city: content 
        };
        //    current weather 
      axios.post("http://localhost:3001/testAPI",body).then((response)=>{
        // console.log( response.data);

        this.handleWeather(response.data)
        this.handleMap(response.data)
       });


        // forecast
       axios.post("http://localhost:3001/city",body).then((response)=>{
        console.log( 0);
        console.log( response.data.list[0]);
           this.handleWeatherF(response.data)
       });
    }

    

    handleWeather = (weather) => {        
        this.weather.refresh(weather)
    }

    handleWeatherF = (weather) => {
        this.weatherforecast.refresh(weather)
    }

    handleMap = (map) => {
        this.map.refresh([map.coord.lat,map.coord.lon])


    }



    async getLocation(){
       await navigator.geolocation.getCurrentPosition(this.showPosition);
    }
     showPosition=(position)=>{

        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=d2ae3ac1f6ff5f27e6857a661328554d`).then((response)=>{
                            console.log(response.data)
                            this.handleWeather(response.data)
                            // this.handleWeather(response.data)
                            // btnGreeting.innerHTML = response.data.main.temp
                    });

         
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=d2ae3ac1f6ff5f27e6857a661328554d`).then((response)=>{
                        console.log(response.data)
                        this.handleWeatherF(response.data)
                       
                });   
    }







}

export default App;

