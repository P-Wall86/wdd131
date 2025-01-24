var currentYear = new Date().getFullYear();
var lastModified = document.lastModified;

document.querySelector("footer p:first-child").innerHTML = "&copy" + currentYear + " 🌴 Pamela Pared 🌴 Argentina ";
document.querySelector("footer p:nth-child(2)").innerHTML = "Last modified: " + lastModified;

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
  }
  
  const temperature = 34;
  const windSpeed = 10;

  if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("wind-chill-value").innerHTML = `${windChill.toFixed(1)}°C`;
} else {
  document.getElementById("wind-chill-value").innerHTML = "N/A";
}