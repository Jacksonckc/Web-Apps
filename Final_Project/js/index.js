const dropMenuContent = () => {
    document.getElementsByClassName("content")[0].classList.toggle("show_menu_content");
}

window.onclick = function(event) {
    if (!event.target.matches('#menu_button')) {
      var dropdowns = document.getElementsByClassName("content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show_menu_content')) {
          openDropdown.classList.remove('show_menu_content');
        }
      }
    }}


const fetchTempleData = async() => {
  const response = await fetch('../temple_info.json');
  const data = await response.json()
  let list = filterFourTemplesData(data)
  createElements(list)
}

const filterFourTemplesData = (data) => {
  let templeDataList = []
  for (let i=0; i < data.length; i++) {
    if ((data[i].temple_id == 101)||(data[i].temple_id == 79)||(data[i].temple_id == 198)||(data[i].temple_id ==205)){
      templeDataList.push(data[i])
    }
  }
  return templeDataList
}

const createElements = (list) => {
  list.forEach(element => {

      //creating all the elements we need
      let i = 0
      let container = document.getElementById('container')
      let subContainer = document.getElementsByClassName('subContainer')[i]
      let name = document.createElement('h3')
      let location = document.createElement('h4');


      name.textContent = element.name
      location.textContent = element.location


      //adding everything to the HTML
      
      subContainer.prepend(name);
      subContainer.appendChild(location);
      container.appendChild(subContainer)
  });
}

fetchTempleData()