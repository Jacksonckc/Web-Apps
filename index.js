document.getElementById('lastUpdated').innerHTML += document.lastModified;

window.onload = function () {
  Particles.init({
    selector: '.background',
    color: ['#DA0463', '#404B69', '#DBEDF3'],
    connectParticles: true,
  });
};

var particles = Particles.init({
  selector: '.background',
  color: ['#DA0463', '#404B69', '#DBEDF3'],
  connectParticles: true,
});
