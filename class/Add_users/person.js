const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function getPerson() {
  try {
    start_time = new Date().getTime();
    fetch('https://randomuser.me/api')
      .then((response) => response.json())
      .then((data) => {
        end_time = new Date().getTime() - start_time;
        drawPerson(data.results[0], end_time);
      });
  } catch (e) {
    console.log(e);
  }
}

function drawPerson(person, timeElapsed) {
  document.getElementById('img').setAttribute('src', person.picture.large);
  document.getElementById('name').innerHTML =
    person.name.first + ' ' + person.name.last;
  document.getElementById('gender').innerHTML = person.gender;
  document.getElementById('email').innerHTML = person.email;
  document.getElementById('password').innerHTML = person.login.password;
  document.getElementById('location').innerHTML =
    person.location.city + ', ' + person.location.country;
  dateOfBirth = new Date(person.dob.date);
  document.getElementById('bd').innerHTML =
    dateOfBirth.getDate() + ' of ' + monthNames[dateOfBirth.getMonth()];
  document.getElementById('time').innerHTML = timeElapsed + 'ms';
}
