const checkboxes = document.querySelectorAll(".inbox input[type=checkbox]");
let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  // check if they have the shift key down
  // and checked that they are checking it
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
          checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
