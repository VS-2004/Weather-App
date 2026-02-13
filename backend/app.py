from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route("/health")
def health():
    return jsonify({
        "status": "ok",
        "message": "Backend is running"
    })

@app.route("/weather")
def weather():
    city = request.args.get("city")

    if not city:
        return jsonify({"error": "City parameter is required"}), 400

    # Step 1: Geocoding
    geo_url = f"https://geocoding-api.open-meteo.com/v1/search?name={city}&count=1"
    geo_res = requests.get(geo_url).json()

    if "results" not in geo_res:
        return jsonify({"error": "City not found"}), 404

    lat = geo_res["results"][0]["latitude"]
    lon = geo_res["results"][0]["longitude"]
    city_name = geo_res["results"][0]["name"]

    # Step 2: Current weather
    weather_url = (
        "https://api.open-meteo.com/v1/forecast"
        f"?latitude={lat}&longitude={lon}&current_weather=true"
    )

    weather_res = requests.get(weather_url).json()
    current = weather_res["current_weather"]

    result = {
        "city": city_name,
        "temperature": current["temperature"],
        "wind_speed": current["windspeed"],
        "weather_code": current["weathercode"]
    }

    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)