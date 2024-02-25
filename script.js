const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const countdownTitle = document.getElementById('countdown-title');
const titleInput = document.getElementById('title-input');
const dateInput = document.getElementById('date-input');

let countdownDate = '1 Jan 2025';

function countdown() {
  const newYearsDate = new Date(countdownDate);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Update countdown title and date
function updateCountdown() {
  const newTitle = titleInput.value;
  const newDate = dateInput.value;

  // Check if either the title or date input is empty
  if (newTitle === '' || newDate === '') {
    alert('Please fill in both the title and date fields.');
    return; // Exit the function early if inputs are empty
  }

  // Update countdown title and date if inputs are not empty
  countdownTitle.innerText = `Countdown To ${newTitle}`;
  countdownDate = newDate;

  countdown(); // Update countdown with new date
}

// Initial call
countdown();
setInterval(countdown, 1000);



