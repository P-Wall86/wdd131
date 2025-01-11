var currentYear = new Date().getFullYear();

var lastModified = document.lastModified;

document.querySelector("footer p:first-child").innerHTML = "&copy" + currentYear + " 🌴 Pamela Pared 🌴 Argentina ";
document.querySelector("footer p:nth-child(2)").innerHTML = "Last modified: " + lastModified;