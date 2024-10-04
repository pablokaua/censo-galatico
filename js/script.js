let result = document.getElementById("result")

function getPlanetData(planet) {
    document.getElementById("name").textContent = planet.name 
    document.getElementById("climate").textContent ="Clima: " + planet.climate 
    document.getElementById("population").textContent = "População: " + planet.population
    document.getElementById("terrain").textContent ="Terreno: " + planet.terrain 
}

function searchPlanet(planets){
    let input = document.getElementById("seach-input").value.toLowerCase()

    if(input !== ""){
        planets.forEach(planet => {
            if(planet.name.toLowerCase().includes(input)){
                getPlanetData(planet)
            }
        })
    } 
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

    let search_button = document.getElementById("seach-button")

    search_button.addEventListener("click", () => {
        searchPlanet(results)
    })
}

document.addEventListener("DOMContentLoaded", getAllPlanets)

