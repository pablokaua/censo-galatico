let result = document.getElementById("result")
let table = document.getElementById("residents-table")

function getResidentsData(residents){
    table.innerHTML = ""
    if(residents.length > 0){
        let trHead = document.createElement("tr")
        let thName = document.createElement("th")
        let thBirthYear = document.createElement("th")
        thName.textContent = "Nome"
        thBirthYear.textContent = "Data Nascimento"
        trHead.appendChild(thName)
        trHead.appendChild(thBirthYear)
        table.appendChild(trHead)

        residents.forEach(async resident => {
            let url = resident
            let res = await fetch(url)
            let result = await res.json()
            
            let tr = document.createElement("tr")
            let name = document.createElement("td")
            let birthYear = document.createElement("td")
            name.textContent = result.name
            birthYear.textContent = result.birth_year
            tr.appendChild(name)
            tr.appendChild(birthYear)
            table.appendChild(tr)
        });
    }
}

function getPlanetData(planet) {
    document.getElementById("name").textContent = planet.name 
    document.getElementById("climate").textContent ="Clima: " + planet.climate 
    document.getElementById("population").textContent = "População: " + planet.population
    document.getElementById("terrain").textContent ="Terreno: " + planet.terrain 
    getResidentsData(planet.residents)
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

1