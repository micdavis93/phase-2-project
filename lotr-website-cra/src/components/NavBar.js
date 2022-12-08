import React from "react"
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
        <NavLink to="/">
            All Characters
        </NavLink>
        
        <NavLink to="/movies">
            Movies
        </NavLink>

        <NavLink to="/quotes">
            Quotes
        </NavLink>

        <NavLink to="/books">
            Books
        </NavLink>
    </nav>
  )
}