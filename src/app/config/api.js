import axios from "axios";

export const baseurl = "https://pokeapi.co/api/v2";
export const imgurl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

export const getAllPokemon = async (page = 1) => {
  const limit = 20;
  const offset = (page - 1) * limit;

  const response = await axios.get(
    `${baseurl}/pokemon/?limit=${limit}&offset=${offset}`
  );
  const pokemons = await Promise.all(
    response.data.results.map(async (pokemon) => {
      const details = await axios.get(`${baseurl}/pokemon/${pokemon.name}`);
      return {
        name: details.data.name,
        id: details.data.id,
        image: details.data.sprites.front_default,
      };
    })
  );

  return { results: pokemons };
};
export const getPokemonDetail = async (name) => {
  const response = await axios.get(`${baseurl}/pokemon/${name}`);
  return response.data;
};
