var currentYear = new Date().getFullYear();
var lastModified = document.lastModified;

document.querySelector("footer p:first-child").innerHTML = "&copy" + currentYear + " 🌴 Pamela Pared 🌴 Argentina ";
document.querySelector("footer p:nth-child(2)").innerHTML = "Last modified: " + lastModified;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', ()=> {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove the active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add the active class to the clicked link
            this.classList.add('active');
        });
    });
}));