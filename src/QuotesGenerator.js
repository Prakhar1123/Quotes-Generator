import React, { useState } from "react";
import Quote from "./Quote";
import './Quotes.css';
const quotesData = [
    { text: 'Be yourself; everyone else is already taken.', author: 'Oscar Wilde' },
    { text: 'In the end, it\'s not the years in your life that count. It\'s the life in your years.', author: 'Abraham Lincoln' },
    { text: 'The only limit to our realization of tomorrow will be our doubts of today.', author: 'Franklin D. Roosevelt' },
    { text: 'You miss 100% of the shots you don\'t take.', author: 'Wayne Gretzky' },
    { text: 'Believe you can and you\'re halfway there.', author: 'Theodore Roosevelt' },
  ];

function QuotesGenerator(){
    const [quote,setQuote]=useState({})

    const generateRandomQuote=()=>{
        const randomIndex=Math.floor(Math.random()*quotesData.length);
        setQuote(quotesData[randomIndex])
    }
    return(
         <div className="quotes-generator">
            <button onClick={generateRandomQuote}>Generate Quote</button>
            {quote.text && <Quote text={quote.text} author={quote.author}/>}
            
         </div>
    )

}

export default QuotesGenerator;