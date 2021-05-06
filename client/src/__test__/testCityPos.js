import axios from 'axios';

export default {
  getPosWeather(lat,lng) {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d2ae3ac1f6ff5f27e6857a661328554d`)
      .then(res => res.data)
      .catch(error => console.log(error));
  }
}

