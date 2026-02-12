<<<<<<< HEAD
async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const resultDiv = document.getElementById("result");
    const button = document.querySelector("button");

    if (!city) {
        resultDiv.innerHTML = "⚠️ Please enter a city name.";
        return;
    }

    button.disabled = true;
    resultDiv.innerHTML = '<div class="loading">⏳ Fetching weather data...</div>';

    try {
        const response = await fetch(`http://127.0.0.1:5000/weather?city=${city}`);
        const data = await response.json();

        if (data.error) {
            resultDiv.innerHTML = `❌ ${data.error}`;
        } else {
=======
function getWeather() {
    const city = document.getElementById("cityInput").value;
    const resultDiv = document.getElementById("result");

    if (!city) {
        resultDiv.innerHTML = "❌ Please enter a city name";
        return;
    }

    resultDiv.innerHTML = "⏳ Loading...";

    fetch(`http://127.0.0.1:5000/weather?city=${city}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                resultDiv.innerHTML = `❌ ${data.error}`;
                return;
            }

>>>>>>> f1bff51bdd1e188e1a8984134676394e11c87fba
            resultDiv.innerHTML = `
                <p>📍 <strong>${data.city}</strong></p>
                <p>🌡 Temperature: ${data.temperature} °C</p>
                <p>💨 Wind Speed: ${data.wind_speed} km/h</p>
<<<<<<< HEAD
                <p>🔢 Weather Code: ${data.weather_code}</p>
            `;
        }
    } catch (error) {
        resultDiv.innerHTML = "🚫 Unable to connect to backend server.";
    }

    button.disabled = false;
=======
            `;
        })
        .catch(() => {
            resultDiv.innerHTML = "⚠️ Error connecting to backend";
        });
>>>>>>> f1bff51bdd1e188e1a8984134676394e11c87fba
}