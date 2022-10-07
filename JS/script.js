
async function getCities() {

let response = await fetch('https://countriesnow.space/api/v0.1/countries/capital/');
let data = await response.json();
cities = data.data;
// console.log(cities);

    
    let select = document.getElementById('cities');
    // console.log(city)
        for (let index = 0; index < cities.length; index++) {
            const element = cities[index];
            // console.log(element.name)
            
            let opt = document.createElement('option');
            opt.value = element.capital;
            opt.innerHTML = element.capital;
            select.appendChild(opt);
        }
        
        
}
    
getCities();

async function getWeather() {
    
    let e = document.getElementById("cities");
    value = e.value;
    let text = e.options[e.selectedIndex].text;
    console.log(text)
    let response = await fetch(`http://api.weatherstack.com/current?access_key=5c4d64c114b0322c2b3cb0ec4a031979&query=${text}`);
    let data = await response.json();
    console.log(data)
    console.log(data.datetime);
    document.querySelector(".temp").innerHTML=data.current.temperature;
    document.querySelector(".nameCity").innerHTML=data.location.country;
    document.querySelector(".country").innerHTML=data.location.name;
    document.querySelector(".imgW").src =data.current.weather_descriptions[0];

}



