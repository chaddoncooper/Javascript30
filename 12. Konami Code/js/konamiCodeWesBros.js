let pressedKeys = [];
let konamiCode =
  "ArrowUp ArrowUp ArrowDown ArrowDown ArrowLeft ArrowRight ArrowLeft ArrowRight b a";

window.addEventListener("keyup", e => {
  pressedKeys.push(e.key);

  let konamiCodeLength = konamiCode.split(" ").length;
  
  pressedKeys.splice(
    -konamiCodeLength - 1,
    pressedKeys.length - konamiCodeLength
  );

  if (pressedKeys.join(' ').includes(konamiCode)) {
    window.alert("Konami Code :)");
  }
});
