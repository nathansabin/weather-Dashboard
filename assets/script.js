var weatherTable = querySelector("weather-data");

var APIKey = "69f6064d5d75e2da671874023a6ce236";
var seattleUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=47.6062&lon=122.3321&appid=" + APIKey;
var tacomaUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=47.2529&lon=122.4443&appid=" + APIKey;
var BellevueUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=47.6101&lon=&appid=" + APIKey;

// checks if assets were found, if so then it will format it as a json array
function Seattleweather(seattleUrl){
    fetch(seattleUrl)
    .then(function(response){
        if (response.status !== 200){
            document.location.replace("assets/404.html");
            return;
        }
        else {
            console.log(response.status);
            return response.json();
        }
    })

// formats data on to page
    .then(function(data){
        var docArray = data.response.docs();
        for (var i = 0; i < docArray; i++){
            var listItem = createElement("p");
            // add a dot with what ever data name we want to pull
            listItem.textContent = docArray[i];
            document.body.append(listItem);
        }
    })
}

Seattleweather()
