$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=wijchen&APPID=0e0b5a3ddd302a57127353527d373806",
function(data){
    console.log(data);
    var place = data.name;
    document.getElementById("place").innerHTML = place;
});

