let lastScroll = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  const scroll = window.pageYOffset;

  if (scroll > lastScroll) {
    navbar.style.top = "-170px";
  } else {
    navbar.style.top = "0";
  }
  lastScroll = scroll;
});
