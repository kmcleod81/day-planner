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
            // creating gray color for the past time
            colRowElement.addClass("past");
        } else if (hour === currentHour) {
            // deleting past color, and creating red present time color
            colRowElement.removeClass("past");
            colRowElement.addClass("present");
        } else {
            // deleting past and present, and creating green future time color
            colRowElement.removeClass("past");
            colRowElement.removeClass("present");
            colRowElement.addClass("future");
        }
    });
    // when you click inside a <input> you can enter an event
    // when you click the .saveBtn the text is saved into local storage
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        var key = $(this).parent().attr("id").split("-")[1];
        console.log(key);
        var value = $(this).siblings("input").val();
        console.log(value);
        localStorage.setItem(key, value);
    });

    // when you refresh the page, the saved event stays on the page
    for (var key = 9; key < 17; key++)
        $("#text-entry-" + key).val(localStorage.getItem(key));
});


