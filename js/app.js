const searchCityName=()=>{
const searchField=document.getElementById('search-field')
const searchText=searchField.value;
// console.log(searchText)
// clear input 
searchField.value='';
const url=(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=9c63dd20664ed6779b701ebc74ec7145`);
fetch(url)
.then(res=>res.json())
.then(data=>DisplayTemperature(data))
.catch(error=> alert("wrong city name"))
}

const DisplayTemperature=(temperatures)=>{
    // console.log(temperatures)
    const tempResult=temperatures.main.temp
    const tempConverter=parseFloat(tempResult)-273.15;
    const CTemp=Math.round(tempConverter)
    // const cTemp=[(tempConverter-32)*5]/9;
    // const temperatureDetails=temperatures.main.temp;
    const  searchResult=document.getElementById('search-result')
    const div=document.createElement('div');
    div.innerHTML=`<div class="weather-status text-white text-center">
    <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
    <h1>${(temperatures.name)}</h1>
    <h3><span>${(CTemp)}</span>&deg;C</h3>
    <h1 class="lead">Clouds</h1>
</div>`
searchResult.appendChild(div);
}




