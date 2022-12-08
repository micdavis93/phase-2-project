import React, {useState, useEffect} from "react"
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Header from "./components/Header"
import Home from "./components/Home"
import CharacterList from "./components/CharacterList"
import MovieList from "./components/MovieList"
import QuoteList from "./components/QuoteList"
import AccomplishmentList from "./components/AccomplishmentList"

export default function App() {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/movie-characters")
    .then(r => r.json())
    .then(data => {
      setCharacters(data)
    })
  }, [])

  // console.log(characters)

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/characters">
          <Container>
            <CharacterList characters={characters}/>
          </Container>
        </Route>
        <Route path="/movies">
          <MovieList />
        </Route>
        <Route path="/quotes">
          <QuoteList />
        </Route>
        <Route path="/accomplishments">
          <AccomplishmentList />
        </Route>
      </Switch>
    </div>
  );
}