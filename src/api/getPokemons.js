import axios from 'axios';

const getPokemons = async () => {
  try {
    const res = await axios('https://pokeapi.co/api/v2/pokemon/?limit=151');
    return await res.data.results;
  } catch (error) {
    console.log(error);
  }
};

export { getPokemons };
