
import { Map } from '@uiw/react-baidu-map';
import {  Switch, Route, Link, Router, NavLink} from 'react-router-dom';
import CustomMap from './components/CustomMap';
import TestCity from './components/TestCity';
import GGMap from './components/TestGoogle';
import MyClass from './components/TestGoogle';


function App() {

  return (
 
      <div>
        <div className="App">
        <h1>GROUP 29</h1>
        </div>
        
     
         
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
   
    </div>

      

      <TestCity/>
    
  </div>




  );
}

export default App;

