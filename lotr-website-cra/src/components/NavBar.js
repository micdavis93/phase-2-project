import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
        <NavLink to="/">
            Home
        </NavLink>
        
        <NavLink to="/characters">
            Characters
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