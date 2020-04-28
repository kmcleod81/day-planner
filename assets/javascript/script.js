$(document).ready(function () {
    // when the planner page is opened, the current day is displayed on the top inside the .time-block
    $("#date").text(moment().format("dddd, MMMM Do, YYYY"))
    var currentHour = moment().hours();
    // when you scroll down, the time blocks have standard business hours 9-5.
    // time blocks are color coded to indicate past, present & future
    $(".cal-row").each(function () {
        var colRowElement = $(this);
        var hourId = colRowElement.attr("id"); // col-9
        var hour = parseInt(hourId.split("-")[1]);
        if (hour < currentHour) {
            colRowElement.addClass("past");
        } else if (hour === currentHour) {
            colRowElement.removeClass("past");
            colRowElement.addClass("present");
        } else {
            colRowElement.removeClass("past");
            colRowElement.removeClass("present");
            colRowElement.addClass("future");
        }
    });
    // when you click inside a <textarea> you can enter an event
    // when you click the .saveBtn the text is saved into local storage
    // when you refresh the page, the saved event stays on the page
});


