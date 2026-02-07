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

            resultDiv.innerHTML = `
                <p>📍 <strong>${data.city}</strong></p>
                <p>🌡 Temperature: ${data.temperature} °C</p>
                <p>💨 Wind Speed: ${data.wind_speed} km/h</p>
            `;
        })
        .catch(() => {
            resultDiv.innerHTML = "⚠️ Error connecting to backend";
        });
}