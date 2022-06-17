const { Pokemon, Type } = require("../db");
const axios = require("axios");

const allApiData = async () => {
  try {
    const apidata = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const apilinks = apidata.data.results.map((p) => {
      return p.url;
    });

    const infourls = await axios.all(apilinks.map((links) => axios.get(links)));
    let pokemons = infourls.map((p) => p.data);
    return pokemons;
  } catch (err) {
    console.error("Error in the controller: allApiData");
  }
};

module.exports = {
    allApiData,
};
