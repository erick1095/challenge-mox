import React, { useEffect, useState } from "react";
import axios from 'axios'

const Quote = () => {
    const [ quote, setQuote ] = useState({})
    useEffect(()=>{
        axios.get(`https://finnhub.io/api/v1/quote?symbol=AAPL&token=c9fj7jqad3iampagitu0`)
        .then((r)=>{
                setQuote(r.data)
            })
            .catch((e)=>{
                console.log("Error: ", e)
            })
    },[])
    return (
        <div>
            <h1>Quote</h1>
            <ul>
                <li>
                    {`Current Price: ${quote.c}`} 
                </li>
                <li>
                    {`Change: ${quote.d}`} 
                </li>
                <li>
                    {`Percent change: ${quote.dp}`} 
                </li>
                <li>
                    {`High price of the day: ${quote.h}`} 
                </li>
            </ul>
        </div>
    )
}

export default Quote