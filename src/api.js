async function fetchPokemons() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200');

    if (response.ok) {
        // if HTTP-status is 200-299
        // get the response body (the method explained below)
        // let json = await response.json();
        // console.log(json);
        return response.json();
    } else {
        //alert('HTTP-Error: ' + response.status);
        throw new Error('HTTP-Error: ' + response.status);
    }
}

export { fetchPokemons };
