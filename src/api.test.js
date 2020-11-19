import { fetchAPokemon, fetchPokemonURL } from "./api";

import lget from "lodash/get";

it("fetchPokemon test", async () => {
  jest.setTimeout(300000);

  const ditto = "ditto";

  return fetchAPokemon(ditto).then((json) => {
    expect(json).not.toBeNull();
    //let front_artwork = json?.sprites?.other?.official-artwork?.front_default;
    //json?.sprites?.other?.["official-artwork"]?.front_default

    // const sprites = json.sprites;
    // expect(sprites).not.toBeUndefined();
    // const other = sprites.other;
    // expect(other).not.toBeUndefined();
    // const official_artwork = other['official-artwork'];
    // expect(official_artwork).not.toBeUndefined();
    // const front_default = official_artwork.front_default;
    const front_default = lget(
      json,
      "sprites.other.official-artwork.front_default"
    );
    expect(front_default).not.toBeUndefined();
  }, 30000);
});

it("fetchPokemon test - non existent character", async () => {
  jest.setTimeout(300000);

  const nonExistent = "nonexistent";

  return fetchAPokemon(nonExistent).then(
    (json) => {
      expect(json).not.toBeNull();
      //let front_artwork = json?.sprites?.other?.official-artwork?.front_default;
      //json?.sprites?.other?.["official-artwork"]?.front_default

      // const sprites = json.sprites;
      // expect(sprites).not.toBeUndefined();
      // const other = sprites.other;
      // expect(other).not.toBeUndefined();
      // const official_artwork = other['official-artwork'];
      // expect(official_artwork).not.toBeUndefined();
      // const front_default = official_artwork.front_default;
      const front_default = lget(
        json,
        "sprites.other.official-artwork.front_default"
      );
      expect(front_default).not.toBeUndefined();
    },
    (error) => {
      expect(error).not.toBeNull();
    }
  );
}, 30000);
