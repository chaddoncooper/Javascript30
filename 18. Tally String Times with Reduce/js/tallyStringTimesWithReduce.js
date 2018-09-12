const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

const totalSeconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, seconds) => total + seconds);

const hours = Math.floor(totalSeconds / 3600);
const mins = Math.floor((totalSeconds % 3600) / 60);
const seconds = (totalSeconds % 3600) % 60;
document.querySelector('#total').innerHTML = `Total: ${hours}:${mins}:${seconds}`;
