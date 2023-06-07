import React from "react";
import Card from '../Card/Card'
import '../Quotes/Quotes.css'
import Form from "../Form/Form";
import propTypes from 'prop-types'

const Quotes = ({ quotes, addQuote, loading }) => {
    const quoteCards = quotes.map((quote, index) => {
        return (
            <Card
                quote={quote.quote}
                author={quote.author}
                key={Date.now() + index}
            />

        )
    })

    return (
        <>
            <article className='hero-image-container'>
                <h1 className="welcome-message">Welcome To The LuciVerse.</h1>
            </article>
            <div className="form-container">
                <h2 className="form-text">GOT A LUCIFIER QUOTE YOU DON'T SEE? ADD IT HERE, WE KNOW IT'S WHAT YOU TRULY DESIRE...</h2>
                <Form addQuote={addQuote} />
            </div>
            {loading && <p className="loading-message">Please wait, we are waiting on Lucifier to load the quotes...</p>}
            <article className="cards-container">
                {quoteCards}
            </article>
        </>

    )

}

Quotes.prototype = {
    addQuote: propTypes.func.isRequired,
    quotes: propTypes.arrayOf(propTypes.object).isRequired,
    loading: propTypes.string.isRequired
}

export default Quotes;