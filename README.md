
# Group-29-Aquamarine-Alpaca Weather Forecaster

## Project overview
This full-stack project allows users to view the current weather conditions in their area and other cities as well as future weather forecasts, the latest local news and clothing suggestion. ![Screenshot 1](/screenshot/Mongkok.png?raw=true "Screenshot 1")

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

### To run the weather forecaster locally

Please install mongoDB in your computer and input the ` MongoDB_Data` into `mongodb://localhost:27017/CityName`

In server file:
```
npm start
```
In client file:
```
npm start
```
The weather forecaster is now running in your default browser at: http://localhost:3000/
Please make sure your browser allows this webpage to access your location in order to trigger features in this weather forecaster.

## Website features
If you want to check the weather or future weather in your city or in other cities, this weather forecaster provides you with enough information. The weather information is collected from OpenWeather API.

When this weather forecaster is first loaded, it shows the weather in your current place and the weather for the next 48 hours, and your current location, with additional useful information such as clothing advice for the current weather conditions and the latest local news. ![Screenshot 2](/screenshot/Beijing.png?raw=true "Screenshot 2")

If you want to check current weather or weather in the next 48 hours of other cities, simply type in the name of the city you wish to know in the search tab, then the webpage will refresh and showcase that specific city's current weather, weather in the next 48 hours, location, latest news, and clothing suggestion. ![Screenshot 3](/screenshot/Auckland.png?raw=true "Screenshot 3")

### Map
When the application is launched, a Google map of the user's current area is displayed. It allows the user to zoom in and out, and even move around to view it. In addition, when the user tries to search for other cities, the map will relocate to other regions. The embedded map is from Google Map.

### Current weather and weather forecast
The current weather of the area user locates at would be displayed when the application is launched, along with the 24 hours and 48 hours weather forecast. Furthermore, it allows user to type in and search for any cities in the world and all the weather information would be refreshed and updated correspondingly.

### News
When the application is launched, the latest news from the user's current location is displayed. In addition,  when the user tries to search for other areas, the content of the news page will be updated to other places/cities. The embedded news tab is from Bing news.

### Clothing suggestion
For the default and responsive weather information, the suggestion is given according to the current weather situation. It gives user suggestion on activities such as good for outdoor activities when it is sunny weather, take umbrella when it rains or drizzles. Also, it gives user clothing suggestion according to the "feels-like" temperature.

## Tools used in this project
1. Front-end
JAVASCRIPT, CSS, along with REACT, EXPRESS, and NODE.js was used. Google Map API was also used to work on the map component. Jest was used for unit testing.
2. Back-end
JAVASCRIPT, CSS, along with REACT, EXPRESS, and NODE.js was used. Express Router collects navigational components that compose declaratively with the application. Axios was used to consume OpenWeather APIs. Jest was used for unit testing.
3. Database
MongoDB was used to create and store the list of worldwide cities, which includes the name, country and other information of the cities. Then, the information could be get access to directly from front-end when the users try to search.

## Project management
* Zoom Meeting
The Zoom meeting is held every two days, the team members discuss to make the project plan, implement the idea and meet the requirements. Besides the scheduled meeting, we also get connected with each other using the instant messaging App like WeChat for urgent response.
* Trello Board 
Trello was used to create the task boards with the columns To Do, Progress, and Done. The team members could have a whole picture of how the development is going on. Also, each member could grab and work on the part they are good at.
* Version Control 
GitHub Version Control was used to track and manage changes of the software code over time. It enables multiple people to simultaneously work on a single project.

## Acknowledgement
We sincerely appreciate the embedding of OpenWeather https://openweathermap.org/ for the current weather and weather forecasting information, Google Maps https://www.google.com/maps for the location and map information, and Bing News https://www.bing.com/news for the region's lastest news to enable our project's functionality.
