import React, {useState, useEffect} from "react"
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Books from "./components/Books"
import Movies from "./components/Movies"
import Characters from "./components/Characters"
import Quotes from "./components/Quotes"

export default function App() {

  // I want to fetch all the character data, merge by id, and then divide up the data from there

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch("https://the-one-api.dev/v2/character", {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer zO055AjvEv_Wr2i9DMuZ'
      }
    })
    .then(r => r.json())
    .then(data => {
      setCharacters(data.docs)
    })
  }, [])

  console.log(characters)

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/books">
          <Books />
        </Route>

        <Route path="/movies">
          <Movies />
        </Route>

        <Route exact path="/characters">
          <Characters />
        </Route>

        <Route path="/quotes">
          <Quotes />
        </Route>
      </Switch>
    </div>
  );
}