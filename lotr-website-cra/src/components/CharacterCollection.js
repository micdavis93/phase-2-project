import React from "react"
import { Card } from "semantic-ui-react";

import CharacterCard from "./CharacterCard"


export default function CharacterCollection({characters}) {

    const mappedCharacters = characters.map(character => {
        return <CharacterCard key={character.id} character={character} />
    })

    return (
        <Card.Group itemsPerRow={3} >
            {mappedCharacters}
        </Card.Group>
    )
}