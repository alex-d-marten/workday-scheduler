// set js DateTime as resuable variable using luxon
var DateTime = luxon.DateTime;

// gather the current date to be displayed to user
var dateTime = DateTime.now();
dateTime = dateTime.toLocaleString(DateTime.DATE_HUGE);
console.log(dateTime);

// declare variables
var currentDayEl = $('#currentDay');


// function to add current date to top of the page
var updateCurrentDay = function() {
    $(currentDayEl).text(dateTime);
};
updateCurrentDay();