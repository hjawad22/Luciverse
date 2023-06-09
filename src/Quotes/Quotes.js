import React from "react";
import Card from "../Card/Card";
import "../Quotes/Quotes.css";
import propTypes from "prop-types";

const Quotes = ({ quotes, loading }) => {
    const quoteCards = quotes.map((quote, index) => {
        return (
            <Card
                quote={quote.quote}
                author={quote.author}
                key={Date.now() + index}
            />
        );
    });

    return (
        <>
            {loading && <p className="loading-message">Please wait, we are waiting on Lucifier to load the quotes...</p>}
            <article className="cards-container">
                {quoteCards}
            </article>
        </>
    );
};

export default Quotes;

Quotes.prototype = {
    quotes: propTypes.arrayOf(propTypes.object).isRequired,
    loading: propTypes.string.isRequired
};