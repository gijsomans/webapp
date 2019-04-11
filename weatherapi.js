

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=venray&APPID=0e0b5a3ddd302a57127353527d373806&units=metric&lang=nl",
function(data){
    console.log(data);
    var place = data.name;
    var temp = data.main.temp;
    document.getElementById("place").innerHTML = "Weather in " + place;
    document.getElementById("temp").innerHTML = "Temputre is " + temp
});

