import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [images, setImages] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);

    const pexelsApiKey =
      "563492ad6f91700001000001c16a9d8d23724c3b9325257f62a527ed";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handlePexelsResponse(response) {
    setImages(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(() => alert("Word not found. Search for another word!"));
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
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <h1>Brenda's Dictionary</h1>
          </div>
          <div className="col-md-auto pt-3">
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
        <div className=" dictionary rounded m-4 p-5">
          <Results results={results} />
          <Images images={images} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
