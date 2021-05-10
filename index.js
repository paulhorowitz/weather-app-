async function getCityWeatherData (city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3e781ed9534f5f1bada39b2ca6c99ca4`, { mode: 'cors' })
  const weatherData = await response.json()
  console.log(weatherData)
  return weatherData
}

function displayCityName (apiResponse) {
  const cityNameEl = document.getElementById('city-name')
  cityNameEl.innerHTML = apiResponse.name + ', ' + apiResponse.sys.country
  return cityData
}

function displayCurrentTemp (apiResponse) {
  const temperatureEl = document.getElementById('temperature')
  temperatureEl.innerHTML = parseInt(apiResponse.main.temp) + "&deg"
}

function displayWeatherDescription (apiResponse) {
  let bodyEl = document.getElementsByTagName("BODY")
  const descriptionEl = document.getElementById('description')
  apiResponse = apiResponse.weather
  let description = apiResponse[0].description
  descriptionEl.innerHTML = description
}

function changeBackgroundImage (apiResponse) {
  apiResponse = apiResponse.weather
  switch (apiResponse[0].main) {
    case 'Clear':
      document.body.style.backgroundImage = "url('images/sunny.jpeg')"
      break;
    case 'Clouds':
      document.body.style.backgroundImage = "url('images/cloudypink.jpg')"
      break;
    case 'Rain':
      document.body.style.backgroundImage = "url('images/rain2.jpg')"
      break;
    default:
      document.body.style.backgroundImage = "url('images/sunny.jpeg')"
  }
}

// Create default city
let cityData = "Adelaide"
renderCity(cityData)

// Listen for city search bar input and assign to cityData
searchBoxEl = document.getElementById("search-box");
searchBoxEl.addEventListener("search", function() {
  cityData = searchBoxEl.value;
  renderCity(cityData);
});

async function renderCity(cityData) {

  cityData = await getCityWeatherData(cityData);
  displayCityName(cityData);
  displayCurrentTemp(cityData);
  displayWeatherDescription(cityData);
  changeBackgroundImage(cityData);
}

//displayCityName(citydata)

// 3e781ed9534f5f1bada39b2ca6c99ca4
