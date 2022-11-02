
import './App.css';
import React, { useEffect, useState } from "react";
function App() {
  const [quote, setQuote] = useState('');


  useEffect(() => {
    const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
   

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setQuote(json.quotes[Math.floor(Math.random()*102)].quote);
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();
}, []);


return (
    <div className="rquote">
        {quote}<br />
        <a href='/'><button>New Quote</button></a>
    </div>
);
};

export default App;
