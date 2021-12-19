//Show current date and time

$(document).ready(function() {
    var todaySchedule = moment().format("MMM Do YYYY");
    var currentHour = moment().format("HH");
    var displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = todaySchedule;


});