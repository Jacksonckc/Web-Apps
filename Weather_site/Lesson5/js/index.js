
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


function showNotice() {

  if (getDate() == 5){
    document.getElementById('saturday_notice').style.display = 'block'
  }
}

showNotice()

