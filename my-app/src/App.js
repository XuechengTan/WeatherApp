
import { APILoader,withMap} from '@uiw/react-baidu-map';
import ExampleMap from './ExampleMap/Map';




function App() {


  const CustomWithMap = withMap(ExampleMap);


  return (
    <div className="App">
     <h1>GROUP 29</h1>

     <div style={{ width: '100%', height: '300px' }}>
      <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
        <CustomWithMap
          enableScrollWheelZoom
          zoom={11}
          
        />
      </APILoader>
    </div>

  </div>
  );
}

export default App;

