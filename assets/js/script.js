// declare variables
var currentDayEl = $('#currentDay');
var dateTime = DateTime.now();
console.log(dateTime);

// function to add current date to top of the page
var updateCurrentDay = function() {
    $(currentDayEl).text('test');
};
updateCurrentDay();