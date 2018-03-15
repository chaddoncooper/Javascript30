const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const secondsDegrees = calcMinuteSecondDegrees(now.getSeconds());
    secondHand.style.transform = `rotate(${secondsDegrees}deg`;

    const minutesDegrees = calcMinuteSecondDegrees(now.getMinutes());
    minuteHand.style.transform = `rotate(${minutesDegrees}deg`;

    const hoursDegrees = calcHourDegrees(now.getHours());
    hourHand.style.transform = `rotate(${hoursDegrees}deg`;

    if (now.getSeconds() == 0) {
        secondHand.style.transitionDuration = '0s';
        minuteHand.style.transitionDuration = '0s';
        hourHand.style.transitionDuration = '0s';
    } else {
        secondHand.style.transitionDuration = '0.05s';
        minuteHand.style.transitionDuration = '0.05s';
        hourHand.style.transitionDuration = '0.05s';
    }
}

function calcMinuteSecondDegrees(time) {
    return ((time / 60) * 360) + 90;
}

function calcHourDegrees(time) {
    return ((time / 12) * 360) + 90;
}

setInterval(setDate, 1000);