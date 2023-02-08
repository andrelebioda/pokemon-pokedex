import { useNavigate } from "react-router-dom";
import Accordion from "./Accordion";

const PokemonDetailPageInfo = ({ data, abilities, moves }) => {
  const pokemon = {
    id: data.id.toString().padStart(3, "0"),
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default,
    types: data.types,
    stats: data.stats,
    abilities,
    moves,
  };

  const navigate = useNavigate();

  console.log(pokemon);

  return (
    <div className={`detail-page__wrapper ${pokemon.types[0].type.name}`}>
      <div className="detail-page__inner">
        <div className="back-btn__wrapper">
          <button onClick={() => navigate("/")}>&lt; Back to overview</button>
        </div>
        <div className="title__wrapper">
          <h1>
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="types">
            {pokemon.types.map((type) => (
              <span key={type.type.name} className={type.type.name}>
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
        <div className="info__wrapper">
          <div className="image">
            <img src={pokemon.image} alt="" />
          </div>
          <div className="stats">
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name} className="stat">
                <h3>{stat.stat.name}</h3>
                <div className="max-value">
                  <span
                    className="base-value-line"
                    style={{ "--base-stat": `${stat.base_stat}` }}
                  >
                    <span className="base-value">{stat.base_stat}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="abilities__wrapper">
          <Accordion
            title="Abilities"
            data={pokemon.abilities}
            effect_entries={1}
          />
        </div>

        <div className="moves__wrapper">
          <Accordion title="Moves" data={pokemon.moves} effect_entries={0} />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPageInfo;
