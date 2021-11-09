function x(jsonData) {
  console.log(getKeyByValue(jsonData, 'John'));

  console.log(jsonData.previousClasses[1]);

  let h2 = document.createElement('h2');
  h2.innerHTML = jsonData.name;

  // let h3 = document.createElement('h3');
  // h3.innerHTML = jsonData.previousClasses[1];

  document.getElementById('readyForH2').appendChild(h2);
  // document.querySelector('#readyForClass').innerHTML =
  //   jsonData.previousClasses[1];
}

function getData() {
  fetch('./data.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      x(data);
      console.log(data);
    });
}

let jsonData = new Promise(getData);

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
