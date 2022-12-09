import React from "react"
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header"
import Home from "./components/Home"
import CharacterList from "./components/CharacterList"
import CharacterPage from "./components/CharacterPage"
import MovieList from "./components/MovieList"
import QuoteList from "./components/QuoteList"
import AccomplishmentList from "./components/AccomplishmentList"
import AddNewCharacter from "./components/AddNewCharacter"

export default function App() {

  // console.log(characters)

  return (
    <div className="App" style={{margin: "3%"}}>
      <Header />
      <br></br>
      <hr></hr>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/characters">
          <CharacterList />
        </Route>

        <Route path="/characters/:id">
          <CharacterPage />
        </Route>

        <Route path="/characters/new">
          <AddNewCharacter />
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