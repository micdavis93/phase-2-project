import React, { useState } from "react"


export default function AddNewMovie({addNewMovie}) {

    const initialFormValues = {
        title: "",
        releaseYear: "",
        length: {
            theatrical: 0,
            extended: 0
        },
        image: "",
        description: "",
        wikipedia: ""
    }

    const [formValues, setFormValues] = useState(initialFormValues)

    const handleFormValues = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value});
        console.log(formValues)
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const newMovie = {
            title: formValues.title,
            releaseYear: formValues.releaseYear,
            length: {
                theatrical: Number(formValues.length),
                extended: 0
            },
            image: formValues.image,
            description: formValues.description,
            wikipedia: formValues.wikipedia
        }

        fetch("http://localhost:4000/movies", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newMovie)
        })
        .then(r => r.json())
        .then(addNewMovie)
    }

    return (
        <div className="ui segment">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" name="title" placeholder="Title" onChange={handleFormValues} />
                    <input type="text" name="releaseYear" placeholder="Release Year" onChange={handleFormValues} />
                    <input type="text" name="length" placeholder="Length in Minutes" onChange={handleFormValues} />
                    <input type="text" name="image" placeholder="Image" onChange={handleFormValues} />
                    <input type="text" name="description" placeholder="Description" onChange={handleFormValues} />
                    <input type="text" name="wikipedia" placeholder="Wikipedia URL" onChange={handleFormValues} />
                </div>
                <button className="ui button" type="submit">
                Add Movie
                </button>
            </form>
        </div>
    )
}