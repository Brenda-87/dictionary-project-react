import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyword}`);
  }

  function handleKeywordChange(event) {
    console.log(event);
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary container">
      <div className="row">
        <div className="col-5 heading">
          <h1>Brenda's Dictionary</h1>
        </div>
        <div className="col Dictionary-search">
          <form onSubmit={search}>
            <input
              type="search"
              onChange={handleKeywordChange}
              className="form-control"
              placeholder="floccinaucinihilipilification"
              autoFocus={true}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}
