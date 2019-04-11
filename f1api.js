$.getJSON("http://ergast.com/api/f1/current/last/results.json",
function(data){
    console.log(data);
    var place = data.racetable.round;
    document.getElementById("place").innerHTML = "Weather in " + place;
});