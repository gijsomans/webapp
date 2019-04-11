$.getJSON("http://ergast.com/api/f1/current/next.json",
function(data){
    console.log(data);
    var place =  data.MRData.RaceTable.Races["0"].raceName;
    var round = data.MRData.RaceTable.Races["0"].round;
    var season = data.MRData.RaceTable.Races["0"].season;

    document.getElementById("race").innerHTML = "Next race " + place;
    document.getElementById("round").innerHTML = "Round " + round;
    document.getElementById("season").innerHTML = "Season " + season;
});
$.getJSON("http://ergast.com/api/f1/current/last/results.json",
function(data){
    console.log(data);
    var place =  data.MRData.RaceTable.Races["0"].raceName;
    var round = data.MRData.RaceTable.Races["0"].round;
    var season = data.MRData.RaceTable.Races["0"].season;

    document.getElementById("race").innerHTML = "Next race " + place;
    document.getElementById("round").innerHTML = "Round " + round;
    document.getElementById("season").innerHTML = "Season " + season;
});