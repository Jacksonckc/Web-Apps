const fetchCurrentWeatherData = async () => {
  let cityID = '5607916';
  let key = 'ff64551a0d603239a02c046858ddfe50';
  let units = 'imperial';
  let request = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${key}&units=${units}`;
  const response = await fetch(request)
  const data = response.json()
  return data
};

const fillInCurrentWeatherData = async () => {
  
  const data = await fetchCurrentWeatherData();
  document.getElementById('current-weather').innerHTML = data.weather[0].description
  document.getElementById('high').innerHTML = data.main.temp_max
  document.getElementById('humidity').innerHTML = data.main.humidity
  document.getElementById('wind-speed').innerHTML = data.wind.speed
  calculate_wind_chill()
}

fillInCurrentWeatherData()

const fetchFiveDayWeatherData = async () => {
  const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=ff64551a0d603239a02c046858ddfe50&units=imperial")
  const data = await response.json()    
  let temps = parseData(data.list);
  fillInFiveDayWeatherData(temps)
}

const fillInFiveDayWeatherData = async (temps) => {
  for (let i=0; i < temps.length; i++) {
    //creating all the elements we need
    let container = document.getElementById('second_row')
    let td = document.createElement('td');
    let img = document.createElement('img');
    let p = document.createElement('p');
    //treating the data so we can get temperature and icon
    temp_data = temps[i].split(" ");
    temperature = temp_data[0] + " °F";
    icon = temp_data[1];

    //setting up the css pics
    icon_link = "https://openweathermap.org/img/w/" + icon + ".png";
    img.setAttribute('src', icon_link);

    //adding everything to the HTML
    p.textContent = temperature;
    td.appendChild(img);
    td.appendChild(p);
    container.appendChild(td);

  }
}
const parseData = (weather) => {

    today = new Date()
    let temps = []
    // temps.push(weather[0].main.temp_max + " " + weather[0].weather[0].icon);
    for (let i = 0; i < weather.length; i++) {
        if(weather[i].dt_txt.includes("18:00")) {
            date = new Date(weather[i].dt_txt)
            if (date.getDay() != today.getDay()) {
                temps.push(weather[i].main.temp_max + " " + weather[i].weather[0].icon)
            }
        }
    }
    
    if (temps.length < 5) {
        temps.push(weather.at(-1).main.temp_max + " " + weather.at(-1).weather[0].icon)
    }
    return temps;
}

const updateNextFiveDays = () =>{
  fetchFiveDayWeatherData()
  const now = new Date();
  let day = now.getDay();
  let days = ['Sun','Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat']
  let container = document.getElementById('first_row')
  for (let i = day + 1 ; i < day + 6; i++){
    let td = document.createElement('td')
    td.innerHTML = days[i%7]
    container.appendChild(td)
  }

}

updateNextFiveDays()






function drop() {
  document.getElementsByClassName("content")[0].classList.toggle("mystyle");
}

window.onclick = function(event) {
  if (!event.target.matches('#menu')) {
    var dropdowns = document.getElementsByClassName("content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('mystyle')) {
        openDropdown.classList.remove('mystyle');
      }
    }
  }
  document.getElementById('event-box').style.opacity = 0

}

function activePage(){
  document.getElementById("active").parentElement.style.backgroundColor="lightblue";
}

activePage()


function getDate(){
  const date = new Date()
  const day = date.getDay()
  return day  
}


WebFont.load({
  google: {
    families: [
      'Josefin Sans'
    ]
  }
});

function calculate_wind_chill() {

  var t = parseInt(document.getElementById('high').innerHTML)
  var s = parseInt(document.getElementById('wind-speed').innerHTML)

  var wind_chill = null

  if (t <= 50 && s > 3){
      wind_chill = Math.round(35.74+0.6215*t - 35.75 * Math.pow(s, 0.16)+0.4275*t*Math.pow(s, 0.16))}

  else { 
      wind_chill = 'N/A'
  }
  document.getElementById('wind-chill').innerHTML = wind_chill
}


function makeHTML() {
  try {
    fetch('./event.json')
    .then((response) => response.json())
      .then((data) => {
          let fish_heaven_events = data.towns[0].events
          createElements(fish_heaven_events)
          console.log(fish_heaven_events)
      });
  } catch (e) {
    console.log(e);
  }
}

const createElements = (array) => {
  let i = 0
  array.forEach(element => {
    let event = array[i];
    let p = document.createElement('p')
    p.textContent = event
    document.getElementById('event-box').appendChild(p)
    console.log(p)
    i ++;
  });
  
}


  
makeHTML()
