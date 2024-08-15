const api = "4508a52e939e4b6c6cf330f26003d6a3";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(url + city + `&appid=${api}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if(data.checkWeather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
        
    }
    else  if(data.checkWeather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
}
else  if(data.checkWeather[0].main=="Rain"){
    weatherIcon.src="images/rain.png";
}
else  if(data.checkWeather[0].main=="Drizzle"){
    weatherIcon.src="images/drizzle.png";
}
else  if(data.checkWeather[0].main=="Mist"){
    weatherIcon.src="images/mist.png";
}
document.querySelector(".weather").style.display="block";
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// Optionally, you can call checkWeather() with a default city name here
// checkWeather("London");
