import React from "react"
import { Card } from "semantic-ui-react";

import CharacterCard from "./CharacterCard"

export default function CharacterList({characters}) {
    
    const mappedCharacters = characters.map(character => {
        return <CharacterCard key={character.id} character={character} />
    })

    return (
        <Card.Group itemsPerRow={4} >
            <h2>All Movie Characters</h2>
        </Card.Group>
    )
}


// import React from "react";
// import PokemonCard from "./PokemonCard";
// import { Card } from "semantic-ui-react";

// function PokemonCollection({pokemon}) {

//   const mappedPokemon = pokemon.map((onePokemon) => {
//     return <PokemonCard key={onePokemon.id} pokemon={onePokemon}/>
//   })

//   return (
//     <Card.Group itemsPerRow={6}>
//       <h1>Hello From Pokemon Collection</h1>
//       {mappedPokemon}
//     </Card.Group>
//   );
// }

// export default PokemonCollection;