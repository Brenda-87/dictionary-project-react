import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();

    function handleResponse(response) {
      console.log(response.data[0]);
      setResults(response.data[0]);
    }
    // API documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary container">
      <div className="row">
        <div className="col-5 heading">
          <h1 className="lh-1">Brenda's Dictionary</h1>
        </div>
        <div className="col Dictionary-search">
          <form onSubmit={search}>
            <input
              type="search"
              onChange={handleKeywordChange}
              className="form-control"
              placeholder="Search for a word"
              autoFocus={true}
            ></input>
          </form>
        </div>
      </div>
      <Results results={results} />
    </div>
  );
}
