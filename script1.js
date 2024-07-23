/*script for temperature and mood changer..............*/
const baseurl = 'https://ai-weather-by-meteosource.p.rapidapi.com';
var cityInput = document.querySelectorAll('.search');
const apikey = '3f289a7be4fb6207e0b978bf676b29d4';
let temp = document.querySelector('.temp');
let hum = document.querySelector('.hum');
let wind = document.querySelector('.wind');
let city = document.querySelector('.city');
let box = document.querySelector('.box1');
async function search() {
    let find = cityInput[0].value;
    let url1 = `http://api.openweathermap.org/geo/1.0/direct?q=${find}&limit=${5}&appid=${apikey}`;
    let response1 = await fetch(url1);
    var data1 = await response1.json();


    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${data1[0].lat}&lon=${data1[0].lon}&appid=${apikey}`;
    console.log(url);
    let response = await fetch(url);
    var data = await response.json();
    console.log(data);

    let p = Math.round(data.main.temp - 273.15);
    let n = 0;
    const p1 = setInterval(() => {
        n = n + 0.1;
        box.style.opacity = n;
        box.style.transition = 'opacity 1s ease-in-out';
        if (n >= 1) {
            clearInterval(p1);
        }
    }, 400);
    setTimeout(() => {
        temp.innerHTML = `temp: ${p}°C`;
    }, 1000);

    setTimeout(() => {
        hum.innerHTML = `hum: ${data.main.humidity} %`;
    }, 2000);

    setTimeout(() => {
        wind.innerHTML = `wind: ${data.wind.speed} Km/h`;
    }, 3000);
    if (p < 4) {
        box.style.backgroundImage = `url('images/cold.avif')`;
    }
    else if (p >= 4 && p < 35) {
        box.style.backgroundImage = `url('images/moderate.jpg')`;
    }
    else {
        box.style.backgroundImage = `url('images/temp.jpg')`;
    }
    city.innerHTML = find;
}