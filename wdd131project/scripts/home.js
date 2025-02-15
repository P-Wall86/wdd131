console.log('Scripts loaded');
//Footer
var currentYear = new Date().getFullYear();
var lastModified = document.lastModified;

console.log("Current Year:", currentYear);
console.log("Last Modified:", lastModified);

document.querySelector("footer p:first-child").innerHTML = "&copy" + currentYear + " - Pamela Pared - Argentina ";
document.querySelector("footer p:nth-child(2)").innerHTML = "Last modified: " + lastModified;

//Active
const navLinks = document.querySelectorAll('.nav a');
const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

//Burger
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  hamburger.addEventListener('click', () => {
    console.log('Hamburger clicked');
    nav.classList.toggle('active');
  });
});

//Herald's
document.addEventListener('DOMContentLoaded', () => {
  const heraldTitle = document.querySelector('.herald h2');
  heraldTitle.innerHTML = '🎺 Herald\'s Call';
});

//?
document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript loaded");

  function updateCTA() {
      const herald = document.querySelector(".herald");
      const newsletter = document.querySelector(".newsletter-cta");
      const screenWidth = window.innerWidth;
      console.log(document.querySelector(".herald"));
      console.log(document.querySelector(".newsletter-cta"));
      
      if (screenWidth <= 1352 && screenWidth > 640) {
          herald.classList.add("collapsed");
          newsletter.classList.add("collapsed");

          if (!document.querySelector(".cta-arrow-left")) {
              const leftArrow = document.createElement("div");
              leftArrow.classList.add("cta-arrow", "cta-arrow-left");
              leftArrow.innerHTML = "&#9664;";
              leftArrow.addEventListener("click", function () {
                console.log("Left arrow clicked");
                  herald.classList.toggle("collapsed");
              });
              document.querySelector(".cta-container").appendChild(leftArrow);
          }

          if (!document.querySelector(".cta-arrow-right")) {
              const rightArrow = document.createElement("div");
              rightArrow.classList.add("cta-arrow", "cta-arrow-right");
              rightArrow.innerHTML = "&#9654;";
              rightArrow.addEventListener("click", function () {
                console.log("Right arrow clicked");
                  newsletter.classList.toggle("collapsed");
              });
              document.querySelector(".cta-container").appendChild(rightArrow);
          }
      } else {
          herald.classList.remove("collapsed");
          newsletter.classList.remove("collapsed");
          document.querySelectorAll(".cta-arrow").forEach(el => el.remove());
      }
  }

  window.addEventListener("resize", updateCTA);
  updateCTA();
});
