import React from "react"
import logo from "../images/lord-of-the-rings-png-logo-6392.png"

export default function Header() {


    return (
        <header>
            <img src={logo} alt="LOTR Logo" style={{width: "100%"}}></img>
            <h1 style={{textAlign: "center"}}>Character Wiki</h1>
        </header>
    )
}