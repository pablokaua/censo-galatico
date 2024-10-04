let result = document.getElementById("result")

async function getAllPlanets(){
    let baseUrl = "https://swapi.dev/api/planets?format=json"
    let res = await fetch(baseUrl)
    let {results} = await res.json()

    results.forEach(planet => {
        let li = document.createElement("li")
        li.innerHTML = `
        <button>${planet.name}</button>
        `
        result.appendChild(li)
    });
}

getAllPlanets()
