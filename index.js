var sleep = require("thread-sleep");

var seconds = function(s){
	sleep(s*1000);
};

var millis = function(m){
	sleep(m);
};

module.exports = {
	seconds : seconds,
	millis : millis
}