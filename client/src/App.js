
import {  Switch, Route, Link, Router, NavLink} from 'react-router-dom';
import CustomMap from './components/CustomMap';
import TestCity from './components/TestCity';
import GGMap from './components/TestGoogle';
import Grid from '@material-ui/core/Grid'
import './App.css';
import Search from './search/index'
import TestAPI from './components/TestAPI';
import './App.css';
import React from 'react';
import Navbar from './navbar/index'
import SearchView from './search/index'
import WeatherView from './weather/index';
import MapContainer from './map/index';


const weather = {"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":283.7,"feels_like":282.12,"temp_min":283.15,"temp_max":284.82,"pressure":1012,"humidity":50},"visibility":10000,"wind":{"speed":4.63,"deg":340},"clouds":{"all":99},"dt":1619714127,"sys":{"type":1,"id":1414,"country":"GB","sunrise":1619670947,"sunset":1619723979},"timezone":3600,"id":2643743,"name":"London","cod":200}

class App extends React.Component {
    state = {
        weather: null,
        location:[34.0522, -118.2437]
    }
    render() {
        return (
            <div className="App">
                <Navbar />
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <SearchView search={this.search}/>
                        <MapContainer ref= {c => this.map = c}/>
                    </Grid>
                    <Grid item xs={6}>
                        <WeatherView ref= {c => this.weather = c}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
    search = (content) => {
        console.log(content)
        this.handleMap()
        this.handleWeather(weather)

    }
    handleWeather = (weather) => {
        this.weather.refresh(weather)
    }

    handleMap = () => {
        this.map.refresh({lat:-34.0522, lng:-118.2437})
    }
}

export default App;

