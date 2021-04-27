

import BMap  from 'BMap';


function App() {

  let map = new BMap.Map("allmap");//initialize Map

  let point = new BMap.Point(116.331398,39.897445);//SET initial center point
  map.centerAndZoom(point,12);
  
  function myFun(result){
    var cityName = result.name;
    map.setCenter(cityName);
    console.log("current city:"+cityName);
  }
  var myCity = new BMap.LocalCity();
  myCity.get(myFun); 


  return (
    <div className="App">
     <h1>GROUP 29</h1>
  </div>
  );
}

export default App;

