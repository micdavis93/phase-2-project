import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {

  const mappedPokemon = pokemon.map((onePokemon) => {
    return <PokemonCard key={onePokemon.id} pokemon={onePokemon}/>
  })

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {mappedPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;