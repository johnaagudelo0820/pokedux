import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemons, getPokemosDetail } from '../api/getPokemons';
import { setLoading } from './uiSlice';

const initialState = {
  pokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    // dispatch loader
    // fetch
    // dispatch loader
    dispatch(setLoading(true));
    const pokemons = await getPokemons();
    const pokemonsDetail = await Promise.all(
      pokemons.map((pokemon) => getPokemosDetail(pokemon))
    );
    dispatch(setPokemons(pokemonsDetail));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(
        (pokemon) => pokemon.id === action.payload.pokemonId
      );

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;

        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

export const { setPokemons, setFavorite } = dataSlice.actions;

export default dataSlice.reducer;
