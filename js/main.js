function makeRequest(url,callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200){
            callback(JSON.parse(xhr.responseText));
        }   
    }
    xhr.open("GET", url, true);
    xhr.send();
}

function displayWeather(data) {
    var weatherDataDiv = document.querySelector('#weatherData');
    var html = "<p>Температура: " + data.main.temp + "°C</p>";
    html += "<p>Тиск: " + data.main.pressure + " hPa</p>";
    html += "<p>Опис: " + data.weather[0].description + "</p>";
    html += "<p>Вологість: " + data.main.humidity + "%</p>";
    html += "<p>Швидкість вітру: " + data.wind.speed + " м/с</p>";
    html += "<p>Напрямок вітру: " + data.wind.deg + "°</p>";
    html += "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Иконка погоды'>";
    weatherDataDiv.innerHTML = html;
}

// Выполнить AJAX-запрос к серверу OpenWeatherMap
var city = 'LVIV'; // Ваш город
var apiKey = '5d066958a60d315387d9492393935c19'; // Ваш API-ключ
var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=' + apiKey;
makeRequest(url, displayWeather);
