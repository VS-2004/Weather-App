# 🌦️ Full Stack Weather App

A full-stack weather application built using **Python (Flask)** for the backend and **vanilla frontend technologies** (HTML, CSS, JavaScript).

The application fetches real-time weather data using the **Open-Meteo API** (completely free, no API key required) and displays it through a clean and simple user interface.

---

## ✨ Features

- 🌍 Search weather by city name
- 🌡 Displays temperature in Celsius
- 💨 Shows wind speed
- 🔗 Frontend connected to backend REST API
- 🔓 No API key required
- 🧱 Clean and simple project structure

---

## 🛠 Tech Stack

- **Backend:** Python, Flask
- **Frontend:** HTML, CSS, JavaScript
- **API:** Open-Meteo (Weather + Geocoding)
- **Tools:** VS Code, Git, GitHub

---

## 🧱 Project Structure

```text
weather-app/
├── backend/
│   ├── app.py
│   └── requirements.txt
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── README.md
└── .gitignore
---

## ⚙️ How to Run Locally

### Step 1: Run Backend (Flask API)

Open a terminal and run:

cd backend  
pip install -r requirements.txt  
python app.py  

The backend server will start at:

http://127.0.0.1:5000

---

### Step 2: Run Frontend

Open the following file in your browser:

frontend/index.html  

You may also use **VS Code Go Live** if preferred.

---

## 🔗 API Usage Example

Request:

GET /weather?city=London

Example Response:

{
  "city": "London",
  "temperature": 12.3,
  "wind_speed": 5.1,
  "weather_code": 3
}

---

## 🧠 Concepts Used

- Flask REST API
- JavaScript Fetch API
- CORS handling
- External API integration
- Frontend–Backend communication
- Full-stack application architecture

---

## 🚀 Future Improvements

- Add weather icons
- Add 5-day weather forecast
- Improve UI design
- Deploy backend online
- Deploy frontend using GitHub Pages or Netlify

---

## 📄 License

MIT License
