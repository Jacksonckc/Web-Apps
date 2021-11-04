function getJoke() {
    try {
        fetch('https://icanhazdadjoke.com/',{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => drawJoke(data.joke))
    }
    catch(e) {
        console.log(e);
    }

}

function drawJoke(joke) {
    div = document.getElementById("joke")
    div.innerHTML = joke;

    if (joke.length >= 80) {
        div.style.fontSize = "24pt";
    } else {
        div.style.fontSize = "48pt";
    }
}

window.onclick = function(event) {
    getJoke()
}
