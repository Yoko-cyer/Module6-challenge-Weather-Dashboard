const APIkey = "a5186e357cf6ed9768a0dc421bcc6e3b";
let city;
const queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;


fetch(queryURL)

