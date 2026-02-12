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
            resultDiv.innerHTML = `
                <p>📍 <strong>${data.city}</strong></p>
                <p>🌡 Temperature: ${data.temperature} °C</p>
                <p>💨 Wind Speed: ${data.wind_speed} km/h</p>
                <p>🔢 Weather Code: ${data.weather_code}</p>
            `;
        }
    } catch (error) {
        resultDiv.innerHTML = "🚫 Unable to connect to backend server.";
    }

    button.disabled = false;
}