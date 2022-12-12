import React, { useState, useEffect } from "react"
import { Container } from "semantic-ui-react";
// import { Route, Switch } from "react-router-dom"

import CharacterSearch from "./CharacterSearch"
// import CharacterPage from "./CharacterPage"
import AddNewCharacter from "./AddNewCharacter"
import CharacterCollection from "./CharacterCollection";

export default function CharacterList() {
    
  const [characters, setCharacters] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  const addNewCharacter = newCharacter => {
    const newCharacterList = [...characters, newCharacter];
    setCharacters(newCharacterList);
  }

  useEffect(() => {
    fetch("http://localhost:4000/movie-characters")
    .then(r => r.json())
    .then(data => {
      setCharacters(data)
    })
  }, [])

  console.log(characters)

  const filteredCharacters = characters.filter(character => {
      return character.name.toLowerCase().includes(searchQuery.toLowerCase())
    })

  return (
      <Container textAlign="center">
          <h2>All Movie Characters</h2>
          <CharacterSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <CharacterCollection characters={filteredCharacters} />
          <AddNewCharacter addNewCharacter={addNewCharacter} />
      </Container>
  )
}