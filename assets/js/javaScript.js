//Show current date and time
var currentHour = moment().format("HH");

$(document).ready(function() {
    var todaySchedule = moment().format("MMM Do YYYY");
    var displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = todaySchedule;
});

//Compare each time slot to current time 
$(".row").each(function() {
    var timeSlot = $(this).attr("id");

    if (currentHour == timeSlot) {
        $(this).addClass("present");
        // $(this).children(".description");

    } else if (currentHour < timeSlot) {
        $(this).removeClass("present");
        $(this).addClass("future");
    } else if (currentHour > timeSlot) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});

//Save value to local storage
$(".saveBtn").click(function(event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
});