$.getJSON(
	"https://api.openweathermap.org/data/2.5/weather?q=Ypenburg&units=metric&appid=72b177c7e8f6dacd24f039912666353f", 
    function(data) {
        console.log(data);
        var weertitel = document.getElementById('weertitel');
        var tempratuur = document.getElementById('tempratuur');
        var windkracht = document.getElementById('windkracht');
        var luchtvochtigheid = document.getElementById('luchtvochtigheid');

        tempratuur.textContent = data.main.temp +' graden';
        windkracht.textContent = data.wind.speed +' km/u';
        luchtvochtigheid.textContent = data.main.humidity +' %';
        var icon = "https://openweathermap.org/img/wn/" + data.weather[0].icon +".png";
        $('#wolk').attr('src', icon);










    }
);


var request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
    var data2 = JSON.parse(this.response)
    var filmToday = document.getElementById('film');

    console.log(data2);
    filmToday.textContent = data2[Math.floor(Math.random()* 22)].title;

}
request.send()
