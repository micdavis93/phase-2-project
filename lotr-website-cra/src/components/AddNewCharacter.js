import React, { useState } from "react"


export default function AddNewCharacter({addNewCharacter}) {

    const initialFormValues = {
        name: "",
        image: "",
        wikiUrl: "",
        pronunciation: "····",
        aka: "",
        gender: "",
        pronouns: "",
        height: "",
        titles: "····",
        birth: {
            year: "",
            location: ""
        },
        death: {
            year: "",
            age: 0
        },
        culture: "",
        weapons: "",
        spouse: "",
        parents: {
            mother: "",
            father: ""
        },
        actor: {
            name: "",
            wikipedia: ""
        },
        firstApp: {
            theatrical: {
                movie: "",
                minute: 0,
                second: 0,
                image: "",
                source: ""
            },
            extended: {
                movie: "",
                minute: 0,
                second: 0,
                image: "",
                source: ""
            }
        },
        description: "",
        actions: {
            fellowship: {
                quotes: [],
                accomplishments: []
            },
            towers: {
                quotes: [],
                accomplishments: []
            },
            return: {
                quotes: [],
                accomplishments: []
            },
            otherQuotes: []
        },
        favorite: false
    }

    const [formValues, setFormValues] = useState(initialFormValues)

    // console.log(...formValues)

    const handleFormValues = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value});
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const newCharacter = {
            name: "",
            image: "",
            wikiUrl: "",
            pronunciation: "····",
            aka: "",
            gender: "",
            pronouns: "",
            height: "",
            titles: "····",
            birth: {
                year: "",
                location: ""
            },
            death: {
                year: "",
                age: 0
            },
            culture: "",
            weapons: "",
            spouse: "",
            parents: {
                mother: "",
                father: ""
            },
            actor: {
                name: "",
                wikipedia: ""
            },
            firstApp: {
                theatrical: {
                    movie: "",
                    minute: 0,
                    second: 0,
                    image: "",
                    source: ""
                },
                extended: {
                    movie: "",
                    minute: 0,
                    second: 0,
                    image: "",
                    source: ""
                }
            },
            description: "",
            actions: {
                fellowship: {
                    quotes: [],
                    accomplishments: []
                },
                towers: {
                    quotes: [],
                    accomplishments: []
                },
                return: {
                    quotes: [],
                    accomplishments: []
                },
                otherQuotes: []
            },
            favorite: false
        }
    
        fetch("http://localhost:4000/movie-characters", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newCharacter)
        })
        .then(r => r.json())
        .then(addNewCharacter)
      }

    return (
        <div className="ui segment">
            <form handleFormSubmit={handleFormSubmit}>
                <div className="inline fields">
                    <input type="text" name="name" placeholder="Name" onChange={handleFormValues} />
                    <input type="text" name="image" placeholder="Image" onChange={handleFormValues} />
                    <input type="text" name="wikiUrl" placeholder="Wiki Page URL" onChange={handleFormValues} />
                    <input type="text" name="gender" placeholder="Gender" onChange={handleFormValues} />
                </div>
                <button className="ui button" type="submit">
                Add Transaction
                </button>
            </form>
        </div>
    )
}



//   const [formValues, setFormValues] = useState(initialFormValues)

//   const handleFormValues = (e) => {
//     setFormValues({...formValues, [e.target.name]: e.target.value});
//     // setFormValues({name: "cactu", image: "", price: "", name: "cactus", id: "asdifqwpoeifnqhwud"})
//   }

//   function handleFormSubmit(e) {
//     e.preventDefault();
//     const newTransaction = {
//       date: formValues.date,
//       description: formValues.description,
//       category: formValues.category,
//       amount: Number(formValues.amount)
//     }

//     fetch("http://localhost:8001/transactions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(newTransaction)
//     })
//     .then(r => r.json())
//     .then(addNewTransaction)
//   }

            {/* <form className="ui form" onSubmit={handleFormSubmit}>
                <div className="inline fields">
                    <input type="text" name="name" placeholder="Name" onChange={handleFormValues} />
                    <input type="text" name="image" placeholder="Image URL" onChange={handleFormValues} />
                    <input type="text" name="wikiUrl" placeholder="Wiki URL" onChange={handleFormValues} />
                    <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleFormValues} />
                </div>
                <button className="ui button" type="submit">
                    Add Transaction
                </button>
            </form> */}