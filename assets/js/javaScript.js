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

    var time09 = $("#time-09 .time-block");
    time09.val(localStorage.getItem("time-09"));
    var time10 = $("#time-10 .time-block");
    time10.val(localStorage.getItem("time-10"));
    var time11 = $("#time-11 .time-block");
    time11.val(localStorage.getItem("time-11"));
    var time12 = $("#time-12 .time-block");
    time12.val(localStorage.getItem("time-12"));
    var time13 = $("#time-13 .time-block");
    time13.val(localStorage.getItem("time-13"));
    var time14 = $("#time-14 .time-block");
    time14.val(localStorage.getItem("time-14"));
    var time15 = $("#time-15 .time-block");
    time15.val(localStorage.getItem("time-15"));
    var time16 = $("#time-16 .time-block");
    time16.val(localStorage.getItem("time-16"));
    var time17 = $("#time-17 .time-block");
    time17.val(localStorage.getItem("time-17"));
});