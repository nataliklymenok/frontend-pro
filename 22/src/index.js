import "./style.css";
 
 const API_KEY = "8dfec89d828f2cc267c8f82a4510b8f6";

    const refreshBtn = document.querySelector("#refresh");

    document.addEventListener("DOMContentLoaded", getData);

    refreshBtn.addEventListener("click", handleClickRefresh);

    function showDateAndTime() {
      const dateSpan = document.querySelector(".date");

      const timeSpan = document.querySelector(".time");

      const updateLabel = document.querySelector("#updated");
      const now = new Date();

      const date = now.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        weekday: "short",
      });

      const time = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      });

      const formatted = now.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      dateSpan.textContent = date;
      timeSpan.textContent = time;
      updateLabel.textContent = formatted;
    }

    function getData() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=en&appid=${API_KEY}`;

          let data = fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
              renderWeather(data);
              showDateAndTime();
            })
            .catch((error) => console.error(error));
        },
        (error) => {
          console.error(error.message);
        },
      );
    }

    function renderWeather(data) {
      const sunUpSpan = document.querySelector(".meta");
      const humidityLabel = document.querySelector("#humidity");
      const pressureLabel = document.querySelector("#pressure");
      const windLabel = document.querySelector("#wind");

      const iconLabel = document.querySelector(".icon");
      const tempLabel = document.querySelector(".temp");
      const feelsLabel = document.querySelector(".feels");
      const conditionLabel = document.querySelector(".condition");

      const sunrise = new Date(data.sys.sunrise * 1000);

      const timeSunrise = sunrise.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      });

      sunUpSpan.textContent = `⏰ SUN  ${timeSunrise}`;
      humidityLabel.textContent = `Humidity: ${data.main.humidity}%`;

      pressureLabel.textContent = `Pressure: ${data.main.pressure} hPa`;

      windLabel.textContent = `Wind: ${data.wind.speed} km/h SSE`;

      tempLabel.textContent = `${Math.round(data.main.temp)} °C`;
      feelsLabel.textContent = `Feels Like: ${Math.round(data.main.feels_like)} °C`;
      conditionLabel.textContent = data.weather[0].main;

      switch (data.weather[0].main) {
        case "Clear":
          iconLabel.textContent = "☀️";
          break;

        case "Clouds":
          iconLabel.textContent = "☁️";
          break;

        case "Rain":
          iconLabel.textContent = "🌧️";
          break;

        case "Snow":
          iconLabel.textContent = "❄️";
          break;

        case "Thunderstorm":
          iconLabel.textContent = "⛈️";
          break;

        default:
          iconLabel.textContent = "🌤️";
      }
    }

    function handleClickRefresh() {
      getData();
    }