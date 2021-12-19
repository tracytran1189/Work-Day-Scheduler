//Show current date and time

$(document).ready(function() {
    var todaySchedule = moment().format("MMM Do YYYY");
    var displayDate = document.getElementById("currentDay");
    var currentHour = moment().format("HH");
    displayDate.innerHTML = todaySchedule;


    //Compare each time slot to current time 
    $(".row").each(function() {
        var timeSlot = $(this).attr("id").split("-")[1];

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

    //Save value and time to local storage
    $(".saveBtn").click(function(event) {
        event.preventDefault();
        var value = $(this).siblings(".time-block").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    });

    //get items from local storage.

    $("#time09.time-block").val(localStorage.getItem("09"));
    $("#time10.time-block").val(localStorage.getItem("10"));
    $("#time11.time-block").val(localStorage.getItem("11"));
    $("#time12.time-block").val(localStorage.getItem("12"));
    $("#time13.time-block").val(localStorage.getItem("13"));
    $("#time14.time-block").val(localStorage.getItem("14"));
    $("#time15.time-block").val(localStorage.getItem("15"));
    $("#time16.time-block").val(localStorage.getItem("16"));
    $("#time17.time-block").val(localStorage.getItem("17"));
});