export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMON_BY_ID = 'GET_POKEMON_BY_ID';
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME';
export const POST_CREATE_POKEMON = 'POST_CREATE_POKEMON';
export const GET_TYPES = 'GET_TYPES';



export const getAllPokemons = () => (dispatch) => {
    return fetch("http://localhost:3001/pokemons")
    .then((res)=> res.json())
    .then((json) => dispatch({type: GET_POKEMONS, payload: json}));
};


export const getPokemonByID = (id) => (dispatch) => {
    return fetch(`http://localhost:3001/pokemons/${id}`)
    .then((res)=> res.json())
    .then((json) => dispatch({type: GET_POKEMON_BY_ID, payload: json}));
};