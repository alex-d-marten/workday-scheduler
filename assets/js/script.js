// set js DateTime as resuable variable using luxon
var DateTime = luxon.DateTime;
// gather the current date to be displayed to user
var dateTime = DateTime.now();
dateTime = dateTime.toLocaleString(DateTime.DATE_HUGE);

// declare variables and constants
const workTimes = ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];
const timeBlockEl = $('#time-block');
var currentDayEl = $('#currentDay');


// function to add current date to top of the page
var updateCurrentDay = function() {
    $(currentDayEl).text(dateTime);
};


var buildTimeBlocks = function() {
    for (var i=0; i < workTimes.length; i++) {
        const contentSection = $('<section>');
        contentSection.addClass('row');

        const hourDiv = $('<div>')
        .addClass('hour col d-flex flex-column justify-content-center text-center')
        .text(workTimes[i]);
        contentSection.append(hourDiv);

        const workdayContentDiv = $('<div>')
            .addClass('col-10 future d-flex flex-column justify-content-center')
            .text('Fil in your content here!')
        contentSection.append(workdayContentDiv);

        const btnElement = $('<button>')
            .addClass('btn saveBtn col d-flex flex-column justify-content-center text-center')
            .text('Save');
        contentSection.append(btnElement);


        timeBlockEl.append(contentSection);

    } 
}

buildTimeBlocks();
updateCurrentDay();