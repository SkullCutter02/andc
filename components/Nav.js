navbar = document.getElementById("navbar");
logo = document.querySelector(".logo");

window.addEventListener("scroll", () => {
  const scroll = window.pageYOffset;

  if (scroll > 0) {
    navbar.style.top = "-85px";
    logo.style.opacity = "0";
  } else {
    navbar.style.top = "0";
    logo.style.opacity = "1";
  }
});
