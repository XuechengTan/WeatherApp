window.addEventListener("load", () => {

    const btnGreeting = document.querySelector("#weather");

    btnGreeting.innerHTML=`<h1>123123</h1>`
    
    
    function getLocation()
    {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    function showPosition(position)
    {
        btnGreeting.innerHTML="纬度: " + position.coords.latitude + 
        "<br>经度: " + position.coords.longitude;    

        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=d2ae3ac1f6ff5f27e6857a661328554d`).then((response)=>{
                            console.log(response.data.main)
                            btnGreeting.innerHTML = response.data.main.temp
                    });
    
    }
    getLocation();



});
