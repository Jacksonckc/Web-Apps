// Menu button
const dropMenuContent = () => {
  document
    .getElementsByClassName('content')[0]
    .classList.toggle('show_menu_content');
};

window.onclick = function (event) {
  if (!event.target.matches('#menu_button')) {
    var dropdowns = document.getElementsByClassName('content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show_menu_content')) {
        openDropdown.classList.remove('show_menu_content');
      }
    }
  }
};

// Fetch functions for temple data from Json file
const fetchTempleData = async () => {
  const response = await fetch('../temple_info.json');
  const data = await response.json();
  let list = filterFourTemplesData(data);
  createElements(list);
};

const filterFourTemplesData = (data) => {
  let templeDataList = [];
  for (let i = 0; i < data.length; i++) {
    if (
      data[i].temple_id == 101 ||
      data[i].temple_id == 79 ||
      data[i].temple_id == 198 ||
      data[i].temple_id == 205
    ) {
      templeDataList.push(data[i]);
    }
  }
  return templeDataList;
};

const createElements = (list) => {
  list.forEach((element) => {
    //creating all the elements we need
    let i = 0;
    let container = document.getElementById('container');
    let subContainer = document.getElementsByClassName('subContainer')[i];
    let name = document.createElement('h3');
    let location = document.createElement('h4');

    name.textContent = element.name;
    location.textContent = element.location;

    //adding everything to the HTML

    subContainer.prepend(name);
    subContainer.appendChild(location);
    container.appendChild(subContainer);
  });
};



// Fetch functions for weather data from 3 party API
let cityID = [];
let key = 'ff64551a0d603239a02c046858ddfe50';
let units = 'imperial';
let request = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${key}&units=${units}`;

const fetchWeatherData = async () => {
  cityID = ['4155966', '1819729', '5604473', '5780993'];
  for (let i = 0; i < cityID.length; i++) {
    request = `https://api.openweathermap.org/data/2.5/weather?id=${cityID[i]}&appid=${key}&units=${units}`;
    const response = await fetch(request);
    const data = await response.json();
    createWeatherElements(data,i)
    console.log(data);

  }
  
};

const createWeatherElements = (data, i) => {

  document.getElementsByClassName('current-weather')[i].innerHTML = data.weather[0].description
  document.getElementsByClassName('high')[i].innerHTML = data.main.temp_max
  document.getElementsByClassName('humidity')[i].innerHTML = data.main.humidity
  document.getElementsByClassName('wind-speed')[i].innerHTML = data.wind.speed

  calculate_wind_chill(i)
}

function calculate_wind_chill(i) {

  var t = parseInt(document.getElementsByClassName('high')[i].innerHTML)
  var s = parseInt(document.getElementsByClassName('wind-speed')[i].innerHTML)

  var wind_chill = null

  if (t <= 50 && s > 3){
      wind_chill = Math.round(35.74+0.6215*t - 35.75 * Math.pow(s, 0.16)+0.4275*t*Math.pow(s, 0.16))}

  else { 
      wind_chill = 'N/A'
  }
  document.getElementsByClassName('wind-chill')[i].innerHTML = wind_chill
}

const templePageStuff = () => {
  fetchTempleData()
  fetchWeatherData()
}

function get_room_number() {
  let number = document.getElementById('number_of_room').value
  document.getElementById('room_required').innerHTML = number
}

window.onclick = function (event) {
  if (event.target.matches('#reception')) {
    document.getElementById('reception').style.display = 'none'
    document.getElementById('full_time_mis').style.display = 'block'
  }
  else if (event.target.matches('#full_time_mis')) {
    document.getElementById('reception').style.display = 'block'
    document.getElementById('full_time_mis').style.display = 'none'
  } 
};