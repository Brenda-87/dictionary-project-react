import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary container">
        <div className="row">
          <div className="col heading">
            <h1>Brenda's Dictionary</h1>
          </div>
          <div className="col Dictionary-search">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={handleKeywordChange}
                defaultValue={props.defaultKeyword}
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
  } else {
    load();
    return "Loading";
  }
}
