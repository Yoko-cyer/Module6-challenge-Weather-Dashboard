const searchForm = document.getElementById("search-form");
const inputSearch = document.getElementById("input-search");
const currentDayCity =document.getElementById("current-day-city");
const currentDayTemp =document.getElementById("current-day-temp");
const currentDayWind =document.getElementById("current-day-wind");
const submitButton = document.getElementById("submit-button");
const currentDayHumidity =document.getElementById("current-day-humidity");
const currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
const APIkey = "a5186e357cf6ed9768a0dc421bcc6e3b";

function getOneCallApi(lon, lat) {
  
  const oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIkey}`;
  return fetch(oneCallUrl)
    .then(function(res){
      return res.json();
    })
    
}


function getWeatherData(city) {
  
  const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
  return fetch(queryURL)
   .then(function(response){
     return response.json();
   })
   .then(function(currentWeather){

    // console.log(currentWeather);
    return getOneCallApi(currentWeather.coord.lon, currentWeather.coord.lat, currentWeather.dt);
   })
}

function fetchWeatherData(event){
  event.preventDefault();
  
  // get user input
  const userInput = inputSearch.value;
  
  // send req to weather API
  
  // fetch weather data based on city name
  // Promises
  getWeatherData(userInput)
  .then(function(weatherData){
    console.log(weatherData);

    // once got the data 
    // populate the data into the dom

    // current
    const datetime = moment().format("YYYY-MM-DD");
    console.log(datetime)

    currentDayCity.innerHTML = `${userInput} ${datetime} icon`;
    currentDayTemp.textContent = weatherData.current.temp + "k";
    currentDayHumidity.textContent = weatherData.current.humidity
    currentDayWind.textContent = weatherData.current.wind-speed + "kmh"
  
    // store the city name into localstorage
    // render the history into the serach list
  })

}


//  when user clicks on the search btn
searchForm.addEventListener('submit', fetchWeatherData);
submitButton.addEventListener('click', fetchWeatherData);

