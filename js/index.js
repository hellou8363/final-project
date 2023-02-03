// Menu Toggle Event
const menu = document.querySelector(".hamburger-icon");
menu.addEventListener("click", () => {
  if (menu.classList.toggle("toggle")) {
    document.getElementById('menu').style.width = "400px";
  } else {
    document.getElementById('menu').style.width = "0";
  }
});

