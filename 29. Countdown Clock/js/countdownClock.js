const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
let countdown;

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;

  displayTimeLeft(seconds);
  dispalyEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // display
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    // display
    displayTimeLeft(secondsLeft);
  }, 1000);

  // setInterval(function() {
  //     seconds--;
  // }, 1000); //setInterval stops when tab isn't focus or scrolling
}

function displayTimeLeft(seconds) {
  console.log(seconds);
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${("0" + remainderSeconds).slice(-2)}`;
  timerDisplay.textContent = display;
  document.title = display;
  console.log({ minutes, remainderSeconds });
}

function dispalyEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minute = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${("0" + minute).slice(-2)}`;
}

function startTimer() {
    clearInterval(countdown);
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach((button) => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    clearInterval(countdown);
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
});