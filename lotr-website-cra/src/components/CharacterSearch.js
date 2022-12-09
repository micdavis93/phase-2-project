import React from "react"


export default function CharacterSearch({searchQuery, setSearchQuery}) {

    function handleChange(event) {
        setSearchQuery(event.target.value)
        console.log(searchQuery)
      }

    return (
        <div style={{padding: "10px"}}>
            <label htmlFor="search">Search:  </label>
            <input
                type="text"
                id="search"
                placeholder="Find your favorite character..."
                value={searchQuery}
                onChange={(e) => handleChange(e)}
                style={{width: "300px"}}
            />
        </div>
    )
}

// import React from 'react'
// import { Input } from 'semantic-ui-react'

// const InputExampleInput = () => <Input placeholder='Search...' />

// export default InputExampleInput
