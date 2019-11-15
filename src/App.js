import React, { useState, useEffect } from "react";
import axios from "axios";

const Phrase = ({ phrase }) => {
  return (
    <div className="frase">
      <h1>{phrase.quote}</h1>
      <p>{phrase.author}</p>
    </div>
  );
};

function App() {
  const initialState = {
    author: "",
    quote: ""
  };

  const [phrase, setPhrase] = useState(initialState);

  const getData = async () => {
    const response = await axios.get(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    setPhrase(response.data[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="contenedor">
      <Phrase phrase={phrase} />
      <button onClick={getData}>Get new phrase</button>
    </div>
  );
}

export default App;
