//Show current date and time

$(document).ready(function() {
    var todaySchedule = moment().format("MMM Do YYYY");
    var displayDate = document.getElementById("currentDay");
    var currentHour = moment().hour();
    console.log('currentHour', currentHour);
    displayDate.innerHTML = todaySchedule;

    for (var i = 9; i < 18 ; i++) {
        createTimeBlock(i);
    }

    //Save value and time to local storage
    $(".saveBtn").click(function(event) {
        event.preventDefault();
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    });

    //Compare each time slot to current time 
    $(".time-block").each(function() {
        var hour = $(this).attr("data-hour");

        if (currentHour == hour) {
            $(this).addClass("present");
        } else if (currentHour < hour) {
            $(this).addClass("future");
        } else if (currentHour > hour) {
            $(this).addClass("past");
        }
    });

    //get items from local storage.

    $('.time-block').each((key, value) => {
        var id = $(value).attr('id');
        $(`#${id} .description`).val(localStorage.getItem(id));
    });
});

function createTimeBlock(hour) {
    var hourMoment = moment().hour(hour).minute(0).second(0).millisecond(0);
    var blockElement = 
        `
            <div id="time-${hourMoment.format('HH')}" class="row time-block" data-hour=${hour}>
                <div class="col-md-1 hour"><span id="${hourMoment.format('HH')}">${hourMoment.format('hA')}</span></div>
                <textarea class="col-md-10 description"></textarea>
                <button class="col-md-1 saveBtn"><i class="fa fa-save"></i></button>
            </div>
        `
    $('.container').append(blockElement);
}