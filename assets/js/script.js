// set js DateTime as resuable variable using luxon
var DateTime = luxon.DateTime;
// gather the current date to be displayed to user
var headerDate = DateTime.now();
headerDate = headerDate.toLocaleString(DateTime.DATE_HUGE);

// declare variables and constants
const workTimes = ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];
const workTimeNumbers = [8,9,10,11,12,13,14,15,16,17];
const timeBlockEl = $('#time-block');
var currentDayEl = $('#currentDay');


// function to add current date to top of the page
var updateCurrentDay = function() {
    $(currentDayEl).text(headerDate);
};


var buildTimeBlocks = function() {
    var hourTime = DateTime.now().hour;

    for (var i=0; i < workTimes.length; i++) {
        const contentSection = $('<section>');
        contentSection.addClass('row');

        const hourDiv = $('<div>')
            .addClass('hour col d-flex flex-column justify-content-center text-center')
            .text(workTimes[i]);
        contentSection.append(hourDiv);

        const workdayContentDiv = $('<div>').addClass('col-10 d-flex flex-column justify-content-center content');

        // const contentUl = $('<ul>')
        //     .addClass('flex-column')
        //     .text("test");
        // workdayContentDiv.append(contentUl);

        contentSection.append(workdayContentDiv);

        const btnElement = $('<button>')
            .addClass('btn saveBtn col d-flex flex-column justify-content-center text-center')
            .text('Save');
        contentSection.append(btnElement);


        timeBlockEl.append(contentSection);

        // color timeblocks according to hour of the day
        if(workTimeNumbers[i] === hourTime) {
            workdayContentDiv.addClass('present');
        } 
        else if (workTimeNumbers[i] < hourTime) {
            workdayContentDiv.addClass('past');
        }
        else {
            workdayContentDiv.addClass('future');
        }
        
    } 
};

// edit schedule
$('.content').on('click', 'div', function() {
    console.log(this);
})

buildTimeBlocks();
updateCurrentDay();