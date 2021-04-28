
import { APILoader,withMap} from '@uiw/react-baidu-map';
import ExampleMap from './Components/Map';

import { BrowserRouter , Switch, Route, Link} from 'react-router-dom';


function App() {


  const CustomWithMap = withMap(ExampleMap);


  return (
 
      <div>
        <div className="App">
        <h1>GROUP 29</h1>
        </div>
        
          {/* Map */}
         <div style={{ width: '100%', height: '300px' }}>
            <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
              <CustomWithMap enableScrollWheelZoom zoom={11}/>
            </APILoader>
          </div>
       
      
      </div>




  );
}

export default App;

