import React from "react"
import { NavLink } from "react-router-dom"
import { Menu } from "semantic-ui-react"

export default function NavBar() {
  return (
    <Menu pointing vertical style={{width: "120px", margin: "auto", textAlign: "center"}}>
      <Menu.Item> 
        <NavLink to="/">
          Home
        </NavLink>
      </Menu.Item>  

      <Menu.Item>
        <NavLink to="/characters">
          Characters
        </NavLink>
      </Menu.Item>

      <Menu.Item>
        <NavLink to="/movies">
          Movies
        </NavLink>
      </Menu.Item>

      {/* <Menu.Item>
        <NavLink to="/characters/new">
          Add New Character
        </NavLink>
      </Menu.Item> */}

      {/* <Menu.Item>
        <NavLink to="/quotes">
          Quotes
        </NavLink>
      </Menu.Item>

      <Menu.Item>
        <NavLink to="/accomplishments">
          Accomplishments
        </NavLink>
      </Menu.Item> */}
    </Menu>
  )
}