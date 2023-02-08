export const getPokemon = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1279");
    const data = await res.json();

    // split data in multiple arrays for pagination
    const pokemon = [];
    let size = 50;
    for (let i = 0; i < data.results.length; i += size) {
      const chunk = data.results.slice(i, i + size);
      pokemon.push(chunk);
    }

    return pokemon;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchPokemonDataByName = async (name) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const singlePokemonData = await res.json();

    return singlePokemonData;
  } catch (error) {
    console.log(error.message);
  }
};

export const getInfosByURL = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
