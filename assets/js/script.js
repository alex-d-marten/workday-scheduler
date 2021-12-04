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
var workdayContent = [];

// function to retrieve items from local storage
var retrieveStoredContent = function() {
    var storedWorkdayContent = JSON.parse(localStorage.getItem('workdayTasks'));

    if(storedWorkdayContent) {
        console.log("Local storage has content")
        workdayContent = storedWorkdayContent;
    }
}

// retrieve local storage items prior to displaying page content
retrieveStoredContent();

// function to add current date to top of the page
var updateCurrentDay = function() {
    $(currentDayEl).text(headerDate);
};

// function to build out the time blocks
var buildTimeBlocks = function() {
    // gather current hour of the day and store as variable
    var hourTime = DateTime.now().hour;

    // for loop to build out the time blocks based on the workTimes array
    for (var i=0; i < workTimes.length; i++) {
        // overall section for each timeblock
        const contentSection = $('<section>');
        contentSection.addClass('row h-auto content-section');

        // hour column
        const hourDiv = $('<div>')
            .addClass('hour col d-flex flex-column justify-content-center text-center')
            .text(workTimes[i]);
        contentSection.append(hourDiv);

        // content column
        const workdayContentDiv = $('<textarea>')
            .addClass('col-10 text-dark content-task')
            .attr('id', i)
        contentSection.append(workdayContentDiv);

        // add in text from local storage
        workdayContent.forEach(function(workdayTask) {
            if(workdayTask.id == i) {
                workdayContentDiv.val(workdayTask.workdayTask)
            }
        });

        // save button column
        const btnElement = $('<button>')
            .addClass('saveBtn col d-flex flex-column justify-content-center align-items-center')
            .text('Save')
            .attr('id', i)
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

// build out page and display current date and timeblocks
buildTimeBlocks();
updateCurrentDay();

// click event handler for save button
var saveButtonClick = function(event) {
    const id = event.target.id;
    const clickedContent = $(`.content-task[id=${id}]`);

    var textContent = clickedContent.val();
    updateLocalStorage(textContent, id);
};

// update local storage function
var updateLocalStorage = function(textContent, id) {
    for(var i = 0; i < workdayContent.length; i++) {
        if(workdayContent[i].id === id) {
            workdayContent[i].workdayTask = textContent;
            break;          
        }
        else {
            workdayContent.push({
                id: id,
                workdayTask: textContent,
            });
            break;
        }
    }
    if(workdayContent.length === 0) {
        workdayContent.push({
            id: id,
            workdayTask: textContent,
        });
        console.log(workdayContent)
    }
    localStorage.setItem('workdayTasks', JSON.stringify(workdayContent));
    
};

// event listener for save button
$(document).on('click', 'button', saveButtonClick);