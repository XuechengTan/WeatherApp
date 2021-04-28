
import {  Switch, Route, Link, Router, NavLink} from 'react-router-dom';
import CustomMap from './Components/CustomMap';


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
        <Route path='/map' component={CustomMap}>
                  {/* Map */}
        </Route>
    </div>

  </div>




  );
}

export default App;

