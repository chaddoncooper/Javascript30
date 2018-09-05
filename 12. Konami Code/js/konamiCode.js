let pressedKeys = [];
let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

window.addEventListener("keyup", e => {
  pressedKeys.push(e.keyCode);

  if (pressedKeys.length >= 11) {
    pressedKeys.shift();

    if (arraysEqual(konamiCode, pressedKeys)) {
      window.alert("Konami Code :)");
    }
  }
});

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (var i = arr1.length; i--; ) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}
