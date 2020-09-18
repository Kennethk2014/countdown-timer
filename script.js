// HTML Objekter
var daysC = document.getElementById("days");
var hoursC = document.getElementById("hours");
var minutesC = document.getElementById("minutes");
var secondsC = document.getElementById("seconds");


var untillDate = "09 nov 2020";



// Functions

function countdown(){
    var travelDate = new Date(untillDate);
    var currentDate = new Date();
   
    var totalSeconds = (travelDate- currentDate) / 1000;
    
    var seconds = Math.floor(totalSeconds % 60);
    var days =  Math.floor(totalSeconds / 86400);
    var minutes = Math.floor(totalSeconds / 60) % 60;
    var hours = Math.floor(totalSeconds / 3600 ) % 24;

    daysC.innerHTML = days;
    hoursC.innerHTML = hours;
    minutesC.innerHTML = minutes;
    secondsC.innerHTML = seconds; 

    if(seconds < 10 ){
        `0${seconds}`
    }
    
}

// Kaller på funksjoner
countdown()
setInterval(countdown, 1000)



