const searchForm = document.getElementById("search-form");
const inputSearch = document.getElementById("input-search");

const APIkey = "a5186e357cf6ed9768a0dc421bcc6e3b";

function getOneCallApi(lon, lat) {
  
  const oneCallUrl = "";
  fetch(oneCallUrl)
}

function getWeatherData(city) {
  
  const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
  fetch(queryURL)
   .then(function(response){
     return response.json();
   })
   .then(function(currentWeather){

    console.log(currentWeather);
    return getOneCallApi(lon, lat);
   })
}



//  when user clicks on the search btn
searchForm.addEventListener('click', function(event){
  event.preventDefault();
  
  // get user input
  const userInput = inputSearch.value;
  
  // send req to weather API
  
  // fetch weather data based on city name
  getWeatherData(userInput)

  // once got the data 
  // populate the ddata into te dom

  // store the city name into localstorage
  // render the history into the serach list
});

