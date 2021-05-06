import axios from 'axios';

export default {
  getLondonWeather(city) {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d2ae3ac1f6ff5f27e6857a661328554d`)
      .then(res => res.data)
      .catch(error => console.log(error));
  }
}

