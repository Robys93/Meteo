const apiKey = "651211c390ecb7765704dfeedbe397"; // ← cambia questo con la tua vera API key

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Roma&appid=651211c390ecb7765704dfeedbe397da&units=metric&lang=it`)
      .then(response => response.json())
      .then(data => {
        document.getElementById("description").innerText = data.weather[0].description;
        document.getElementById("temperature").innerText = `🌡️ ${data.main.temp} °C`;
        document.getElementById("humidity").innerText = `💧 Umidità: ${data.main.humidity}%`;
        document.getElementById("wind").innerText = `🌬️ Vento: ${data.wind.speed} m/s`;
      })
      .catch(error => {
        document.getElementById("description").innerText = "Errore nel caricamento del meteo.";
        console.error("Errore:", error);
      });
