// Delay the mount time
function delayMountTime() {
  setTimeout(function () {
    document.getElementById('card-1').style.display = 'block';
  }, 1000);
  setTimeout(function () {
    document.getElementById('card-2').style.display = 'block';
  }, 2000);
  setTimeout(function () {
    document.getElementById('card-3').style.display = 'block';
  }, 3000);
}

delayMountTime();

// Make the heading to gold
function changeToGold() {
  document.getElementById('popular').style.backgroundColor = 'gold';
  setTimeout(function () {
    document.getElementById('popular').style.backgroundColor = '#12aaeb';
  }, 2000);
}

// Change the font size
function changeStyle1() {
  document.getElementById('price-most-popular1').style.fontSize = '150%';
}

changeStyle1();

//Change buttons to same color

function changeColor() {
  for (i = 0; i < document.getElementsByClassName('button').length; i++) {
  document.getElementsByClassName('button')[i].style.backgroundColor = 'purple';
}
}

changeColor();

function addAlert() {
  alert('User signed in.');
}

setTimeout(function () {}, timeout);
