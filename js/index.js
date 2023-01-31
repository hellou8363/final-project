// Menu Toggle Event
const menu = document.querySelector(".hamburger-icon");
menu.addEventListener("click", () => {
  if (menu.classList.toggle("toggle")) {
    document.getElementById('menu').style.display = "block";
  } else {
    document.getElementById('menu').style.display = "none";
  }
});

