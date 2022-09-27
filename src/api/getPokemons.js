import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

const getPokemons = async () => {
  try {
    const res = await axios(`${BASE_URL}/pokemon/?limit=151`);
    return await res.data.results;
  } catch (error) {
    console.log(error);
  }
};

const getPokemosDetail = async (pokemon) => {
  try {
    const rest = await axios(pokemon.url);
    return await rest.data;
  } catch (error) {
    console.log(error);
  }
};

export { getPokemons, getPokemosDetail };
