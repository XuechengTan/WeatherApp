import { useState } from "react";


function TestCity(){
    var BMap = window.BMap;//取出window中的BMap对象
    var myCity = new BMap.LocalCity();
   
    const [cityName, setCityName] = useState("");

 myCity.get(function(result){
    setCityName(()=> {return result.name}); 
    // console.log(result.name)   
})   

const [showCity, setShowCity] = useState('none')
const [isClick, setIsClick] = useState(false)
   
    function handleOnclick(){
            setIsClick(!isClick)
           isClick ?  setShowCity('none'):setShowCity('block') 
     }

    return(<div>
        <button onClick={handleOnclick}>点击显示/隐藏当前城市</button>

        <div style={{display:showCity}}>        
            <h1>{cityName}</h1>
        </div>
    </div>);
}

export default TestCity