import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemon: { results: [] },
    loading: true,
  },
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setPokemons, setLoading } = pokemonSlice.actions;
export default pokemonSlice.reducer;
