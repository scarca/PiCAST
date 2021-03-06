var sys = require('sys');
var exec = require('child_process').exec;
var express = require('express');
var logger = require('morgan'); 
var app = express();
app.use(logger('dev')); 

app.get('/', function (req, res) {
        res.send('Welcome to PiCAST 3! In the URL, type what you want to do...');
});

app.get('/yt-stream/:url', function (req, res) {
        res.send('Streaming YouTube Video...');
        exec("livestreamer --player=mplayer https://www.youtube.com/watch?v=" + req.params.url + " best");
});

app.get('/screencast/', function(req, res){ 
	res.send('connecting to screencasat at', req.ip) 
	exec("export DISPLAY=:0; vlc -vvv -f http://" + req.ip + ":8008"); 
} 
// Setup PiCAST Server
var srv = app.listen(3000, function () {
        var host = srv.address().address;
        var port = srv.address().port;
        console.log('Access at http://%s:%s', host, port);
});
