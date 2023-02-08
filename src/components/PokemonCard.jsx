import { Link } from "react-router-dom";

const PokemonCard = ({ data }) => {
  const pokemon = {
    id: data.id.toString().padStart(3, "0"),
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default,
    types: data.types,
  };

  return (
    <Link to={`/${pokemon.name}`}>
      <div className={`pokemon-grid__item ${pokemon.types[0].type.name}`}>
        <div className="title">
          <span>#{pokemon.id}</span>
          <h1>{pokemon.name}</h1>
        </div>
        <div className="image">
          {pokemon.image ? (
            <img src={pokemon.image} alt={pokemon.name} />
          ) : (
            <p>no image available</p>
          )}
        </div>
        <div className="types">
          {pokemon.types.map((t) => (
            <span key={t.type.name} className={t.type.name}>
              {t.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
