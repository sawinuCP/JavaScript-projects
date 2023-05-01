const apiKey = "46f80a02ecae410460d59960ded6e1c6"
const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit" , (event)=>{
    event.preventDefault(); /*to prevent refresh the site after clicking the submit button*/

    const cityValue = cityInputEl.value;
    // console.log(cityValue);

    getWeatherData(cityValue);
});


async function getWeatherData(cityValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);
        if (!response.ok){
            throw new Error("Network responce was not OK")
        }

        const data = await response.json()
        console.log(data);

        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed: ${data.main.speed} mps`,
        ];

        weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather-icon" >`
        weatherDataEl.querySelector(".tempreature").textContent = `${temperature}C`
        weatherDataEl.querySelector(".description").textContent = `${description}`
        weatherDataEl.querySelector(".details").textContent = details.map((details) => `${details}`).join("");

    } catch (error) {
        weatherDataEl.querySelector(".icon").innerHTML ="";
        weatherDataEl.querySelector(".tempreature").textContent = "";
        weatherDataEl.querySelector(".description").textContent = "";
        weatherDataEl.querySelector(".details").textContent = "An error happened, please try again later";
        
    }
};























































