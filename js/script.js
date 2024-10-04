let result = document.getElementById("result")

function getPlanetData(planet) {
    document.getElementById("name").textContent = planet.name 
    document.getElementById("climate").textContent ="Clima: " + planet.climate 
    document.getElementById("population").textContent = "População: " + planet.population
    document.getElementById("terrain").textContent ="Terreno: " + planet.terrain 
}

async function getAllPlanets(){
    let url = "https://swapi.dev/api/planets?format=json"
    let res = await fetch(url)
    let {results} = await res.json()

    results.forEach(planet => {
        let li = document.createElement("li")
        li.innerHTML = `
        <button class="button-info">${planet.name}</button>
        `

        let button = li.querySelector(".button-info")
        button.addEventListener("click", () => getPlanetData(planet))

        result.appendChild(li)
    });
}

document.addEventListener("DOMContentLoaded", getAllPlanets)

