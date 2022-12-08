import React from "react"
import logo from "../images/lord-of-the-rings-png-logo-6392.png"
import NavBar from "./NavBar"

export default function Header() {


    return (
        <header>
            <img src={logo} alt="LOTR Logo" style={{width: "100%"}}></img>
            <h1 style={{textAlign: "center"}}>Film Trilogy Wiki</h1>
            <NavBar />
        </header>
    )
}