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

//Select Options
function generateSelectOptions() {
  const reasons = ["Registration", "Suggestions", "Feedback", "Bosworth Day"];
  const selectElement = document.getElementById('reason');
  
  reasons.forEach(reason => {
      const option = document.createElement('option');
      option.value = reason.toLowerCase().replace(/\s+/g, '-');
      option.textContent = reason;
      selectElement.appendChild(option);
  });
}

function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const reason = form.reason.value;
    const review = form.review.value;
    const newsletter = form.newsletter.checked;

    const formData = {
        name,
        email,
        reason,
        review,
        newsletter
    };

    localStorage.setItem('formData', JSON.stringify(formData));

    let submissionCount = localStorage.getItem('submissionCount');
    submissionCount = submissionCount ? parseInt(submissionCount) : 0;
    submissionCount += 1;

    localStorage.setItem('submissionCount', submissionCount);

    alert('Form data saved! Total submissions: ' + submissionCount);

    localStorage.removeItem('formData');
    localStorage.removeItem('submissionCount');

    window.location.reload();
}

function preFillForm() {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
        document.getElementById('name').value = savedData.name || '';
        document.getElementById('email').value = savedData.email || '';
        document.getElementById('reason').value = savedData.reason || '';
        document.getElementById('review').value = savedData.review || '';
        document.getElementById('newsletter').checked = savedData.newsletter || false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    generateSelectOptions();
    preFillForm();

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', handleFormSubmit);
});
