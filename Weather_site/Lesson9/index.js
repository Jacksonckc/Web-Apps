function drop() {
    document.getElementsByClassName('content')[0].classList.toggle('mystyle');
  }
  
  window.onclick = function (event) {
    if (!event.target.matches('#menu')) {
      var dropdowns = document.getElementsByClassName('content');
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('mystyle')) {
          openDropdown.classList.remove('mystyle');
        }
      }
    }
  };
  
  function activePage() {
    document.getElementById('active').parentElement.style.backgroundColor =
      'lightblue';
  }
  
  activePage();
  
  function getDate() {
    const date = new Date();
    const day = date.getDay();
    return day;
  }
  
  
  WebFont.load({
    google: {
      families: ['Josefin Sans'],
    },
  });

  function makeHTML() {
    try {
      fetch('./town.json')
      .then((response) => response.json())
        .then((data) => {
          const needed_towns_array = [
            data.towns[0], data.towns[6], data.towns[2]
          ]
          
          createElements(needed_towns_array)



          console.log(data)
        });
    } catch (e) {
      console.log(e);
    }
  }

  const createElements = (array) => {
    let fish_heaven = document.getElementById('fish_heaven')
    let preston = document.getElementById('preston')
    let soda_springs = document.getElementById('soda_springs')
    let all_towns = [fish_heaven, preston, soda_springs]

    let i = 0;
    array.forEach((item) => {

      let h1 = document.createElement('h1');
      h1.textContent = item.name;

      let h3 = document.createElement('h3');
      h3.setAttribute('class', 'h3')
      h3.textContent = item.motto;

      let year = document.createElement('p');
      year.setAttribute('class', 'info')
      year.textContent = 'Year Founded: ' + item.yearFounded;

      let population = document.createElement('p');
      population.setAttribute('class', 'info')
      population.textContent = 'Population: ' + item.currentPopulation;

      let rain_fall = document.createElement('p');
      rain_fall.setAttribute('class', 'info')
      rain_fall.textContent = 'Average Rainfall: ' + item.averageRainfall;

      let content = document.createElement('div')
      content.setAttribute('class', 'town_content')

      content.appendChild(h1)
      content.appendChild(h3);
      content.appendChild(year);
      content.appendChild(population);
      content.appendChild(rain_fall);

      all_towns[i].appendChild(content)
      i++;

    }
    )}

    
makeHTML()