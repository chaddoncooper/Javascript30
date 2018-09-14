const divs = document.querySelectorAll('div');

function logText(e) {
    console.log(this.classList.value);
    //e.stopPropagation(); // Don't bubble
}

document.body.addEventListener('click', logText);

//divs.forEach(div => div.addEventListener('click', logText));


divs.forEach(div => div.addEventListener('click', logText, {
    capture: true, // capture, run function on the way down the DOM
    once: true // will listen for a click on then unbind itself
}));
