import environment from '../environments';
// import { fetchPokemon as fetchPokemonJSON } from './mocks/api.mock';
import lget from 'lodash/get';

const BASE_URL =
    process.env.NODE_ENV === 'development' ? 'https://dev.pokeapi.co/api/v2/' : 'https://pokeapi.co/api/v2/';

async function fetchPokemonURL(url) {
    let response = await fetch(url);

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

async function fetchAPokemon(pokemonName) {
    //The url to fetch a pokemon should have subpath: pokemon

    if (environment.shouldMock) {
        //load the json file and return its content
        if (pokemonName === 'ditto') {
            return import('./mocks/api.mock').then((mockJson) => {
                return mockJson.fetchPokemon(pokemonName);
            });
        }

        throw new Error('The requested pockemon is not found in the mock folder');
    } else {
        const pokeMonURL = `${lget(environment.api.baseURL)}pokemon/${pokemonName}`;
        return await fetchPokemonURL(pokeMonURL);
    }
}

export { fetchPokemonURL, fetchAPokemon };
