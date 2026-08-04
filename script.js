const hour = new Date().getHours();

let weatherText = "Mumbai Azad Maidan weather is pleasant today.";

if (hour >= 5 && hour < 12) {
  weatherText = "Good morning! Mumbai Azad Maidan weather is cool and fresh.";
} else if (hour >= 12 && hour < 17) {
  weatherText = "Good afternoon! Mumbai Azad Maidan weather is sunny and bright.";
} else if (hour >= 17 && hour < 21) {
  weatherText = "Good evening! Mumbai Azad Maidan weather is calm and golden.";
} else {
  weatherText = "Good night! Mumbai Azad Maidan weather is quiet and peaceful.";
}

document.getElementById("weather-text").textContent = weatherText;
