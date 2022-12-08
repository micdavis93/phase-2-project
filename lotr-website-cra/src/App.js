import React, {useState, useEffect} from "react"
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header"
import NavBar from "./components/NavBar"
import { Container } from "semantic-ui-react";

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
      {/* <NavBar /> */}
      <Container>
        {/* <Switch> */}
          {/* <Route exact path="/"> */}
            {/* <Home /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
            {/* <Home /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
            {/* <Home /> */}
          {/* </Route> */}
        {/* </Switch> */}
      </Container>
    </div>
  );
}