var currentYear = new Date().getFullYear();
var lastModified = document.lastModified;

document.querySelector("footer p:first-child").innerHTML = "&copy" + currentYear + " 🌴 Pamela Pared 🌴 Argentina ";
document.querySelector("footer p:nth-child(2)").innerHTML = "Last modified: " + lastModified;


const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5},
    { id: "fc-2050", name: "power laces", averagerating: 4.7},
    { id: "fs-1987", name: "time circuits", averagerating: 3.5},
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9},
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0}
  ];

function populateProductDropdown() {
    const productSelect = document.getElementById("product");

    productSelect.innerHTML = '<option value="" disabled selected>Choose an option</option>';

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
      });
} 

function handleFormSubmission() {
    alert("Form submitted!");
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem("reviewCount", reviewCount);
    console.log(`Total reviews submitted: ${reviewCount}`);
    window.location.href = "review.html";
}

document.addEventListener("DOMContentLoaded", () => {
    populateProductDropdown();
    const form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmission);
});