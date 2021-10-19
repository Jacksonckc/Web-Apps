function calculate_wind_chill() {
    var t = parseInt(document.getElementById('high').innerHTML)
    var s = parseInt(document.getElementById('wind-speed').innerHTML)
    console.log(t)
    var wind_chill = 35.74+0.6215*t - 35.75*s^(0.16)+0.4275*t*s^(0.16)
    document.getElementById('wind-chill').innerHTML = wind_chill
}

calculate_wind_chill()