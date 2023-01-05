const navBarMenuButton = document.querySelector(".navbar-menu");
const navBarBox = document.querySelector(".navbar-box");
const toggleNavbar = (menuDisplay, boxDisplay) => {
  navBarBox.style.visibility = boxDisplay;
  navBarMenuButton.style.display = menuDisplay;
};