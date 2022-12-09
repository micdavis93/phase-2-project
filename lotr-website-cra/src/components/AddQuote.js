import React from "react"


export default function AddQuote(quoteValue, ) {

    const handleQuoteValue = (e) => {
        setQuoteValue(e.target.value);
      }
    
    function handleQuoteSubmit(e) {
        e.preventDefault();
        const newQuote = quoteValue
        
        const addNewQuote = newQuote => {
            const newQuoteList = [...otherQuotesList, newQuote];
            setOtherQuotesList(newQuoteList);
        }

        fetch("http://localhost:4000/movie-characters/${id}")
        .then(r => r.json())
        .then(data => {
            console.log(data)
            addNewQuote(data)
        })
    }

    return (
        <div>
            
        </div>
    )
}