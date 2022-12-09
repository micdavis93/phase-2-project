import React from "react"
import { Link } from "react-router-dom"
import { Card } from "semantic-ui-react";

export default function CharacterCard({character}) {

    const {id, name, image, gender, pronouns, height, birth, culture, parents, firstApp, actor, wikiUrl} = character
    
    const pronounCaps = pronouns.map((pronoun) => {
        return pronoun[0].toUpperCase() + pronoun.slice(1)
    })

    const remainder = id % 10
    function appearanceSuffix(x) {
        if (x === 1) {
            return "st"
        } else if (x === 2) {
            return "nd"
        } else if (x === 3) {
            return "rd"
        } else {
            return "th"
        }
    }
    const appearSuffix = appearanceSuffix(remainder)

    function movieTitle(movieCode) {
        if (movieCode === "fellowship") {
            return "The Fellowship of the Ring"
        } else if (movieCode === "towers") {
            return "The Two Towers"
        } else {
            return "The Return of the King"
        }
    }
    const firstMovie = movieTitle(firstApp.theatrical.movie)

    return (
        <Card 
            image={image}
            header={name}
            meta={`${culture} | ${gender} | ${height}`}
            
            description={`Born in ${birth.location} in ${birth.year} to ${parents.mother} & ${parents.father}, ${name} is the ${id}${appearSuffix} character to appear in the LOTR films (at minute ${firstApp.theatrical.minute} of ${firstMovie}). ${pronounCaps[0]} is portrayed by ${actor.name}.`}

            extra={<Link to={`/characters/${id}`}>More Information</Link>}
        />
    )
}