let pressedKeys = [];
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

window.addEventListener('keyup', e => {
  pressedKeys.push(e.key);
  
  pressedKeys.splice(
    -konamiCode.length - 1,
    pressedKeys.length - konamiCode.length
  );

  if (pressedKeys.join('') === konamiCode.join('')) {
    window.alert('Konami Code :)');
  }
});
