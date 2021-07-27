/* 
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/

var testing = moment().format('dddd MMMM Do YYYY');
document.getElementById("testing").innerHTML = testing;
var currentTime = moment().format('H');
var currentTimeInteger = parseInt(currentTime);
console.log(currentTimeInteger);
console.log(currentTime);
var timeBlock = $('id');

for (var i = 9; i <= 17; i++) {
    if (timeBlock < currentTimeInteger) {
        $('id').addClass("past");
    }
    if (timeBlock == currentTimeInteger) {
        $('id').addClass("present");
    }
    if (timeBlock > currentTimeInteger) {
        $('id').addClass("future");
    }
}

var saveButton = document.querySelector('.saveBtn');


saveButton.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("time", "appointment");
})