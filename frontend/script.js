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

            const code = data.weather_code;
            let condition = "";
            let icon = "";

            if (code === 0) {
                condition = "clear sky";
                icon = "☀️";
            } else if (code <= 3) {
                condition = "cloudy sky";
                icon = "☁️";
            } else if (code >= 51 && code <= 67) {
                condition = "rainy weather";
                icon = "🌧";
            } else if (code >= 71 && code <= 77) {
                condition = "snowy weather";
                icon = "❄️";
            } else if (code === 95) {
                condition = "thunderstorm";
                icon = "⛈";
            } else {
                condition = "weather";
                icon = "🌤";
            }

            // Weather-based background
            const imageUrl =
                `https://picsum.photos/seed/${encodeURIComponent(condition + city)}/1600/900`;

            document.body.style.backgroundImage = `url("${imageUrl}")`;

            resultDiv.innerHTML = `
                <p>📍 <strong>${data.city}</strong></p>
                <p>${icon} ${condition}</p>
                <p>🌡 Temperature: ${data.temperature} °C</p>
                <p>💨 Wind Speed: ${data.wind_speed} km/h</p>
            `;
        }

    } catch (error) {
        resultDiv.innerHTML = "🚫 Unable to connect to backend server.";
    }

    button.disabled = false;
}