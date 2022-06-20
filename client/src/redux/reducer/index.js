import {
  GET_POKEMONS,
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_NAME,
  POST_CREATE_POKEMON,
  GET_TYPES,
} from "../actions";

const initialState = {
  allPokemons: [],
  pokemon: {},
  types: [],
  filter: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS: //get all pokemons
      return {
        ...state,
        allPokemons: action.payload,
        pokemon: {},
      };
    case GET_POKEMON_BY_ID: //get by id
      return {};
    case GET_POKEMON_BY_NAME: //get by names
      return {
        ...state,
        allPokemons: action.payload,
        pokemon: action.payload,
      };

    case GET_TYPES: //get types
      return {
        ...state,
        types: action.payload,
      };
    case POST_CREATE_POKEMON: //create pokemon
      return {};
    default:
      return state;
  }
};

export default reducer;
