const triggers = document.querySelectorAll('a');
const hightlight = document.createElement('span');
hightlight.classList.add('highlight');
document.body.append(hightlight);

function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        left: linkCoords.left + window.scrollX,
        top: linkCoords.top + window.scrollY

    }
    hightlight.style.width = `${coords.width}px`;
    hightlight.style.height = `${coords.height}px`;
    hightlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
};

triggers.forEach(link => link.addEventListener('mouseenter', highlightLink));