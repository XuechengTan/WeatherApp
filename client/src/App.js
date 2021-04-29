
import {  Switch, Route, Link, Router, NavLink} from 'react-router-dom';
import CustomMap from './components/CustomMap';
import TestCity from './components/TestCity';
import GGMap from './components/TestGoogle';

import Weather from "./Weather/Weather";
import Grid from '@material-ui/core/Grid'
import './App.css';
import Search from './search/index'
import TestAPI from './components/TestAPI';

const weather = {
    "coord": {
        "lon": -122.08,
        "lat": 37.39
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 282.55,
        "feels_like": 281.86,
        "temp_min": 280.37,
        "temp_max": 284.26,
        "pressure": 1023,
        "humidity": 100
    },
    "visibility": 16093,
    "wind": {
        "speed": 1.5,
        "deg": 350
    },
    "clouds": {
        "all": 1
    },
    "dt": 1560350645,
    "sys": {
        "type": 1,
        "id": 5122,
        "message": 0.0139,
        "country": "US",
        "sunrise": 1560343627,
        "sunset": 1560396563
    },
    "timezone": -25200,
    "id": 420006353,
    "name": "Mountain View",
    "cod": 200
}



    





function App() {
  
  return (
            
      <div>
          
        <div className="App">
        <h1>GROUP 29</h1>

        
        <NavLink to='/weather'>
         Weather
       </NavLink>

       <NavLink to='/map'>
          Map
       </NavLink>

       <NavLink to='/news'>
          News
       </NavLink>

    <div> 

      
        <Route path='/map' >
                  {/* Map */}
                  <CustomMap></CustomMap>
                  <GGMap  />
          </Route>
       
        <Route path='/weather' >

            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Search/>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Weather data={weather}/>
            </Grid>

        </Route>

        <Route path='/news'>
            {/* testAPI */}
        </Route>

    </div>

  
      <TestCity/>
      <TestAPI></TestAPI>


        </div>
  </div>




  );
}

export default App;

