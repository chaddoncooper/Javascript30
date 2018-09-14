const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  console.log("ENTER!!");
  console.log(this);
  this.classList.add("trigger-enter");

  setTimeout(() => this.classList.add("trigger-enter-active"), 150);
}

function handleLeave() {
  console.log("LEAVE!!");
  this.classList.remove("trigger-enter", "trigger-enter-active");
}

triggers.forEach(trigger =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach(trigger =>
  trigger.addEventListener("mouseleave", handleLeave)
);
