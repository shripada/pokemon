import { fetchPokemons } from './api';

it('fetchPokemons test', () => {
    return fetchPokemons().then((json) => {
        expect(json).not.toBeNull();
    });
});
