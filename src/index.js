
function updateWeather(response) {
    let temperatureElement = document.querySelector("#temperature")
    let temperature = response.data.temperature.current
    let descriptionElement = document.querySelector("#description")

     console.log(response.data.condition.description)
     
    descriptionElement.innerHTML = response.data.condition.description
    temperatureElement.innerHTML = Math.round(temperature);
}


function searchCity(city) {
let apiKey ="50aa2d0btf45222b4cf0o24817cb2311"
let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}'
axios.get(apiUrl).then(updateWeather)
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input")
    let cityElement = document.querySelector("#city")
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value)
}


let searchFormElement = document.querySelector("#search-form")
searchFormElement.addEventListener("submit", handleSearchSubmit)

