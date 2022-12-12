import React, { useState } from "react"


export default function AddNewCharacter({addNewCharacter}) {

    const initialFormValues = {
        name: "",
        image: "",
        wikiUrl: "",
        pronunciation: "",
        aka: "",
        gender: "",
        pronouns: "",
        height: "",
        titles: "",
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

    function minuteOptions(max) {        
        const minutesArray = []
        for (let i=0; i<max; i++) {
            minutesArray.push(
                <option value={`${i}`}>{i}</option>
            )
        }

        return minutesArray
    }

    const handleFormValues = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value});
        // console.log(formValues.genderInfo)
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const newCharacter = {
            name: formValues.name,
            image: formValues.image,
            wikiUrl: formValues.wikiUrl,
            pronunciation: formValues.pronunciation,
            aka: formValues.aka,
            gender: formValues.genderInfo[0],
            pronouns: formValues.genderInfo.slice(1),
            height: `${formValues.feet}'${formValues.inches}\"`,
            titles: formValues.title,
            birth: {
                year: formValues.birthYear,
                location: formValues.birthLocation
            },
            death: {
                year: formValues.deathYear,
                age: Number(formValues.age)
            },
            culture: formValues.culture,
            weapons: formValues.weapons,
            spouse: formValues.spouse,
            parents: {
                mother: formValues.mother,
                father: formValues.father
            },
            actor: {
                name: formValues.actorName,
                wikipedia: formValues.actorWiki
            },
            firstApp: {
                theatrical: {
                    movie: formValues.firstAppMovie,
                    minute: Number(formValues.firstAppMinute),
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
            description: formValues.description,
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
            <h4>Add a New Character!</h4>
            <form onSubmit={handleFormSubmit}>
                <div className="inline fields">
                    <label><strong>Name: </strong></label>
                    <input type="text" name="name" placeholder="Name" onChange={handleFormValues} />
                    <label><strong> Image: </strong></label>
                    <input type="text" name="image" placeholder="Image URL" onChange={handleFormValues} />
                    <label><strong> Wiki Page: </strong></label>
                    <input type="text" name="wikiUrl" placeholder="Wiki Page URL" onChange={handleFormValues} />
                </div>

                <div className="inline fields">
                    <label><strong>Pronunciation: </strong></label>
                    <input type="text" name="pronunciation" placeholder="Ex: 'guh·LA·dree·uhl'" onChange={handleFormValues} />
                    <label><strong> Also Known As: </strong></label>
                    <input type="text" name="aka" placeholder="Nickname 1, Nickname 2..." onChange={handleFormValues} />
                    {/* <span id="genderPronouns">
                        <label for="gender"><strong> Gender: </strong></label>
                        <select id="genderInfo" name="genderInfo" onChange={handleFormValues}>
                            <option value={["unspecified"]} disabled selected>Select Gender</option>
                            <option value={`["M", "he", "him", "his"]`}>Male</option>
                            <option value={`["F", "she", "her", "hers"]`}>Female</option>
                            <option value={`["NB", "they", "them", "theirs"]`}>Nonbinary</option>
                        </select>
                    </span> */}
                </div>

                <div className="inline fields">
                    <label><strong>Height: </strong></label>
                    <input type="text" name="feet" placeholder="Feet" onChange={handleFormValues} />
                    <input type="text" name="inches" placeholder="Inches" onChange={handleFormValues} />
                    <label><strong> Official Titles: </strong></label>
                    <input type="text" name="titles" placeholder="Title 1, Title 2..." onChange={handleFormValues} />
                </div>

                <div className="inline fields">
                    <label><strong>Birth: </strong></label>
                    <input type="text" name="birthYear" placeholder="Year" onChange={handleFormValues} />
                    <input type="text" name="birthLocation" placeholder="Location" onChange={handleFormValues} />
                    <label><strong> Death: </strong></label>
                    <input type="text" name="deathYear" placeholder="Year" onChange={handleFormValues} />
                    <input type="text" name="age" placeholder="Age" onChange={handleFormValues} />
                </div>

                <div className="inline fields">
                    <label><strong>Culture: </strong></label>
                    <input type="text" name="culture" placeholder="Men, Elves, Dwarves..." onChange={handleFormValues} />
                    <label><strong> Weapons: </strong></label>
                    <input type="text" name="weapons" placeholder="Weapon 1, Weapon 2..." onChange={handleFormValues} />
                </div>

                <div className="inline fields">
                    <label><strong>Spouse: </strong></label>
                    <input type="text" name="spouse" placeholder="Spouse's Name" onChange={handleFormValues} />
                    <label><strong> Mother: </strong></label>
                    <input type="text" name="mother" placeholder="Mother's Name" onChange={handleFormValues} />
                    <label><strong> Father: </strong></label>
                    <input type="text" name="father" placeholder="Father's Name" onChange={handleFormValues} />
                </div>

                <div className="inline fields">
                    <label><strong>Actor: </strong></label>
                    <input type="text" name="actorName" placeholder="Actor's Name" onChange={handleFormValues} />
                    <input type="text" name="actorWiki" placeholder="Actor's Wikipedia URL" onChange={handleFormValues} />
                    <span id="firstApp">
                        <label for="firstApp"><strong> First Appearance: </strong></label>
                        <select id="firstAppMovie" name="firstAppMovie">
                            <option value="First Movie..." disabled selected>Select your option</option>
                            <option value="fellowship">The Fellowship of the Ring</option>
                            <option value="towers">The Two Towers</option>
                            <option value="return">The Return of the King</option>
                        </select>
                        <label for="firstApp"> at Minute </label>
                        <select id="firstAppMinute" name="firstAppMinute">
                            {minuteOptions(300)}
                        </select>
                    </span>
                </div>

                <div style={{width: "100%"}}>
                    <label><strong>Character Description: </strong></label><br></br>
                    <textarea
                        id="description"
                        name="description"
                        style={{width: "100%", height: "150px", padding: "12px"}}
                        placeholder="Describe Your Character"
                        onChange={handleFormValues}
                    />
                </div>

                <button className="ui button" type="submit">
                Submit New Character
                </button>
            </form>
        </div>
    )
}
// name, image, wikiUrl, pronunciation, aka, gender, pronouns, feet, inches, title, birthYear, birthLocation, deathYear, age, culture, weapons, spouse, mother, father, actorName, actorWiki, firstAppMovie, firstAppMinute, description



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