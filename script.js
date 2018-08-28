
// Set up variables
const timer = document.querySelector(".timer");  // timer object
var times = [0, 0, 0]  // minutes, seconds, 100ths of a second
var timerInterval;     // recurring call of runTimer()

// Return time in 2 digits, with leading zero if needed
function addLeadingZero(time) {
    return (time < 10) ? "0" + time : time;
}

// Update a stopwatch-style timer
function runTimer() {

    // Set timer display (adding leading zero if needed)
    timer.innerHTML = addLeadingZero(times[0]) + ":" +
	              addLeadingZero(times[1]) + ":" +
 	              addLeadingZero(times[2]);

    // Increment counter for 100ths of a second
    times[2]++;

    // Check for overflow
    if (times[2] == 100) {  // Completed 1 second
	times[2] = 0;          // Reset 100th sec counter
	times[1]++;            // Increment sec counter
    }
    if (times[1] == 60) {   // Completed 1 minute
	times[1] = 0;          // Reset sec counter
	times[0]++;            // Increment min counter
    }
}

// Start the timer running
function startTimer() {
    timerInterval = setInterval(runTimer, 10);
}

startTimer();   // Start upon script load
