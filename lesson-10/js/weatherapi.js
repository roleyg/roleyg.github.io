var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=15f1af395f7479acc2b5498a332c81fe', true);
weatherObject.send();

weatherObject.onload = function() {
    var weatherPreston = JSON.parse(weatherObject.responseText);
    console.log(weatherPreston);

    document.getElementById('windSpeed').innerHTML = weatherPreston.current_observation.wind_mph;
    document.getElementById('windChill').innerHTML = weatherPreston.current_observation.windchill_f;
    document.getElementById('currentTemp').innerHTML = weatherPreston.current_observation.temp_f;
    document.getElementById('precipitation').innerHTML = weatherPreston.current_observation.precip_today_in;
    document.getElementById('currentWeather').innerHTML = weatherPreston.current_observation.weather;
    document.getElementById('w_icon').src = weatherPreston.current_observation.icon_url.replace('http:', 'https:');;
}

var weatherObject2 = new XMLHttpRequest();

weatherObject2.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=15f1af395f7479acc2b5498a332c81fe', true);
weatherObject2.send();

weatherObject2.onload = function() {
    var weatherPrestonForecast = JSON.parse(weatherObject2.responseText);
    console.log(weatherPrestonForecast);

    document.getElementById('textForecast').innerHTML = weatherPrestonForecast.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('lowT').innerHTML = weatherPrestonForecast.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('highT').innerHTML = weatherPrestonForecast.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
}

