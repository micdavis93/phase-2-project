import React from "react"
import { Link } from "react-router-dom"
import { Card } from "semantic-ui-react";

export default function MovieCard({movie}) {

    const {title, releaseYear, length, image, description, wikipedia} = movie

    return (
        <Card 
            image={image}
            header={title}
            meta={`${releaseYear} | ${length.theatrical} minutes`}
            
            description={description}

            extra={<a href={wikipedia} target="_blank">More Information</a>}
        />
    )
}