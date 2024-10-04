async function getAllPlanets(){
    let baseUrl = "https://swapi.dev/api/planets?format=json"
    let res = await fetch(baseUrl)
    let {results} = await res.json()

    console.log(results)
}

getAllPlanets()