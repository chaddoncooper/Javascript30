let pressedKeys = [];
let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

window.addEventListener("keyup", e => {
  pressedKeys.push(e.keyCode);

  if (pressedKeys.length > konamiCode.length) {
    pressedKeys.shift();

    if (pressedKeys.join('') === konamiCode.join('')) {
        window.alert("Konami Code :)");
    }
  }
});
