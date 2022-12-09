import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export default function CharacterPage() {
    
    const [character, setCharacter] = useState(null);
    const { id } = useParams()

    const [otherQuotesList, setOtherQuotesList] = useState([])
    const [quoteValue, setQuoteValue] = useState("")
        
    useEffect(() => {
        fetch(`http://localhost:4000/movie-characters/${id}`)
            .then(r => r.json())
            .then(data => {
                setCharacter(data)
            })
    }, [id])
    if (!character) return <h2>Loading...</h2>

    const {name, image, wikiUrl, pronunciation, aka, gender, pronouns, height, titles, birth, death, culture, weapons, spouse, parents, actor, firstApp, description, actions, favorite} = character
    const firstMovie = (movieCode) => {
        if (movieCode === "fellowship") {
            return "The Fellowship of the Ring"
        } else if (movieCode === "towers") {
            return "The Two Towers"
        } else {
            return "The Return of the King"
        }
    }
    const firstMinute = firstApp.theatrical.minute
    const fQuotes = actions.fellowship.quotes.map((quote) => {
        return <p>{quote}</p>
    })
    const fAccomp = actions.fellowship.accomplishments.map((accomplishment) => {
        return <p>{accomplishment}</p>
    })
    const tQuotes = actions.towers.quotes.map((quote) => {
        return <p>{quote}</p>
    })
    const tAccomp = actions.towers.accomplishments.map((accomplishment) => {
        return <p>{accomplishment}</p>
    })
    const rQuotes = actions.return.quotes.map((quote) => {
        return <p>{quote}</p>
    })
    const rAccomp = actions.return.accomplishments.map((accomplishment) => {
        return <p>{accomplishment}</p>
    })
    const pronounCaps = pronouns.map((pronoun) => {
        return pronoun[0].toUpperCase() + pronoun.slice(1)
    })

    
    return (
        <div style={{textAlign: "center"}}>
            <h1>{name}</h1>
            <h4><em>({pronunciation})</em></h4>
            <img src={image} alt={name} style={{padding: "20px"}}></img>

            <div className="infoMain">
                <h4>{culture} | {gender} | {height}</h4>
                <h4>{pronounCaps[0]} | {pronounCaps[1]} | {pronounCaps[2]}</h4>
                <h4>{titles}</h4>
                <a href={wikiUrl} target="_blank"><strong>Wiki Page</strong></a>
            </div>
            <br></br>
            <hr></hr>
            <div className="infoExtra">
                <h3>Basic Information</h3>
                <p><strong>Also Known As:</strong>  {aka}</p>
                <p><strong>Birth:</strong>  {birth.year} in {birth.location}</p>
                <p><strong>Death:</strong>  {death.year} in {death.location}</p>
                <p><strong>Mother:</strong>  {parents.mother}</p>
                <p><strong>Father:</strong>  {parents.father}</p>
                <p><strong>Spouse:</strong>  {spouse}</p>
                <p><strong>Weapons:</strong>  {weapons}</p>
                <p><strong>First Appearance:</strong>  {firstMinute} minutes into "{firstMovie(firstApp.theatrical.movie)}"</p>
                <p><strong>Portrayed By:  <a href={actor.wikipedia} target="_blank">{actor.name}</a></strong></p>
            </div>
            <br></br>
            <hr></hr>
            <div className="description">
                <h3>Character Description</h3>
                <p>{description}</p>
            </div>
            <br></br>
            <hr></hr>
            <div className="quotes">
                <h3>Important Quotes</h3>
                <h4>The Fellowship of the Ring</h4>
                    {fQuotes}
                <hr style={{width: "25%"}}></hr>
                <h4>The Two Towers</h4>
                    {tQuotes}
                <hr style={{width: "25%"}}></hr>
                <h4>The Return of the King</h4>
                    {rQuotes}
            </div>
            <br></br>
            <hr></hr>
            <div className="accomplishments">
                <h3>Accomplishments</h3>
                <h4>The Fellowship of the Ring</h4>
                    {fAccomp}
                <hr style={{width: "25%"}}></hr>
                <h4>The Two Towers</h4>
                    {tAccomp}
                <hr style={{width: "25%"}}></hr>
                <h4>The Return of the King</h4>
                    {rAccomp}
            </div>
            <div className="bottomMargin"><br></br><br></br><br></br></div>
        </div>
    )
}