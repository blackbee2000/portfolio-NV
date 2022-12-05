//Scroll Background for Header
let header = document.querySelector("header");
let main = document.getElementById("main");
let projectHome = document.querySelector(".home");
let banner = document.querySelector(".banner");
let about = document.querySelector(".about-top");
function changeBackground() {
  let scrollY = window.pageYOffset;
  if (scrollY > 80) {
    header.classList.add("active-header");
    if (main.classList.contains("homePage")) {
      projectHome.classList.add("active-home");
    } else if (main.classList.contains("detailPage")) {
      banner.classList.add("active-banner");
    } else if (main.classList.contains("aboutPage")) {
      about.classList.add("active-about");
    }
  } else {
    header.classList.remove("active-header");
    if (main.classList.contains("homePage")) {
      projectHome.classList.remove("active-home");
    } else if (main.classList.contains("detailPage")) {
      banner.classList.remove("active-banner");
    } else if (main.classList.contains("aboutPage")) {
      about.classList.remove("active-about");
    }
  }
}
document.addEventListener("scroll", function () {
  changeBackground();
});
