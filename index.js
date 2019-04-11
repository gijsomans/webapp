

var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;

app.on('ready', function () {
    var appWindow;
    var infoWindow;
appWindow = new BrowserWindow({
    show: false,
    width:3840, 
    height:2160,
    frame: false
    
});

appWindow.loadURL('file://' + __dirname + '/bootstrap.html');



appWindow.once('ready-to-show', function(){
    appWindow.show();
});
})
 