var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write('<p>There are ' + secondsPerDay + ' seconds in a day.</p>');
var yearsAlive = 23;
var secondsAlive = secondsPerDay * daysPerWeek * weeksPerYear * yearsAlive;
document.write('<p>I have been alive for more than ' + secondsAlive + ' seconds.</p>');