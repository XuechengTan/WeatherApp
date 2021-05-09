
# Group-29-Aquamarine-Alpaca Weather Forecaster

## Project overview
This full-stack project allows users to view the current weather conditions in their area and other cities as well as future weather forecasts, the latest local news and clothing suggestion. 

![Screenshot 1](/screenshot/Mongkok.png?raw=true "Screenshot 1")

## Quick start guide
In order to run this weather forecaster locally, a number of dependencies need to be installed beforehand.<br>
REMINDER: Please make sure your domain has access to Google Maps and Bing News

### To install the dependencies

In server file:
```
npm install
```
In client file:
```
npm install
```
Test: 
```
npm install --save-dev jest babel-jest @babel/core @babel/preset-env @types/jest
npm install --save-dev jest-mock-axios
npm install --save-dev enzyme @wojtekmaj/enzyme-adapter-react-17 jest-enzyme
```
Map:
```
npm install --save google-map-react
```
Axios:
```
npm install axios
```
Please ensure your host has install material-ui
```
npm install @material-ui/core
```


### To run the weather forecaster locally

Please install `mongoDB` in your computer and input the ` MongoDB_Data` into `mongodb://localhost:27017/CityName`.
Collection name should be `citynames`
```
npm install --save mongoose
```
In server file:
```
npm start
```
If `npm start` failed, please check weather you have install 
`nodemon` or not. It is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
```
npm install -g nodemon
```
When you see `successful` in terminal, express + mongoose start successfully!

In client file:
```
npm start
```
The weather forecaster is now running in your default browser at: http://localhost:3000/

Please make sure your browser allows this webpage to access your location in order to trigger features in this weather forecaster.

## Website features
If you want to check the weather or future weather in your city or in other cities, this weather forecaster provides you with enough information. The weather information is collected from `OpenWeather API`.

When this weather forecaster is first loaded, it shows the weather in your current place and the weather for the next 48 hours, and your current location, with additional useful information such as clothing advice for the current weather conditions and the latest local news.

 ![Screenshot 2](/screenshot/Beijing.png?raw=true "Screenshot 2")

If you want to check current weather or weather in the next 48 hours of other cities, simply type in the name of the city you wish to know in the search tab, then the webpage will show that specific city's current weather, weather in the next 48 hours, location, latest news, and clothing suggestion. 

![Screenshot 3](/screenshot/Auckland.png?raw=true "Screenshot 3")

### Map
When the application is launched, a Google map of the user's current area is displayed. It allows the user to zoom in and out and even move around to view it. In addition, when the user tries to search for other cities, the map will relocate to other regions. The embedded map is from Google Map.

### Current weather and weather forecast
The current weather of the area user would be displayed when the application is launched, along with the 24 hours and 48 hours weather forecast. Furthermore, it allows users to type in and search for any cities globally, and all the weather information would be refreshed and updated correspondingly.

### News
When the application is launched, the latest news from the user's current location is displayed. In addition,  when the user tries to search for other areas, the content of the news page will be updated to other places/cities. The embedded news tab is from Bing News.

### Clothing suggestion
For the default and responsive weather information, the suggestion is given according to the current weather situation. For example, it gives users suggestions on good for outdoor activities when it is sunny weather and takes an umbrella when it rains or drizzles. Also, it gives users clothing suggestions according to the "feels-like" temperature.

## Tools used in this project
1. Front-end

   For the four people in our group, `React` was a new technology. The framework for the development of the weather forecast software was built based on what we learned in class. Our application interface is divided into seven parts, navbar, search, map, current weather, weather forecast, news, and suggestions. Our application needs to use `openweather`'s API to get weather-related JSON data. After successful acquisitions, we store the obtained data (current weather and weather forecast for the next two days) in the corresponding state and make calls to each component. At the same time, we also learned the UI design `material-UI` provided by React to style the application(Grid,Divider,IconButton,etc). We used `GoogleMap` API to get the map and display it on the page. Also, we use Axios to handle asynchronous requests and navigator geolocation to get the user's current location.

2. Back-end

   For the back end, we mainly use `Express` and `Mongoose`, with Express fetching the POST requests from the front end and then fetching the weather data from Openweather's API via Axios. In this POST request, we check if the city entered by the user matches the city data in the database. If it matches, the front-end will receive the data for the corresponding city. In addition, for the default display of city and weather, we receive the latitude and longitude from the front-end POST request and then use the latitude and longitude to get the weather information for the location and return it to the front-end. The purpose of this is to ensure that all data comes from the back-end server and not from the front-end requesting data directly from the API. This has the advantage of improving the stability and reusability of the code compared to fetching data directly from the API.

3. Database

   We have stored all the current cities in `MongoDB`. When the user performs a search, the application will prompt the user for the correct search if the user tries to search for a city that does not exist. This makes the server less likely to send back errors and makes the application faster at determining user input (compared to sending data directly to the openweather server).

4. Test
   
   In terms of testing, we took `Jest` and other ways to test the code, tested whether the asynchronous request from the back-end (whether the API can accept the correct data), and whether the front-end code is displayed correctly. We were using `Postman` to test the connection between the front-end and the back-end.
## Project management (details and contributions can be found in Wiki)
* `Zoom and Tecent Meeting`
The Zoom or Tecent meeting is held around every day, the team members discuss to make the project plan, implement the idea and meet the requirements. Besides the scheduled meeting, we also get connected with each other using the instant messaging App like `WeChat` for urgent response.
* `Trello Board` 
Trello was used to create the task boards with the columns To Do, Progress, and Done. The team members could have a whole picture of how the development is going on. Also, each member could grab and work on the part they are good at.
* Version Control 
`GitHub` Version Control was used to track and manage changes of the software code over time. It enables multiple people to simultaneously work on a single project.

## Acknowledgement
We sincerely appreciate the embedding of `OpenWeather` https://openweathermap.org/ for the current weather and weather forecasting information, `Google Maps` https://developers.google.com/maps/documentation for the location and map information, and `Bing News` https://www.bing.com/news for the region's latest news to enable our project's functionality.
