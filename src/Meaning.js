import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning container">
      <div className="row">
        <div className="col">
          <p className="fw-bold">{props.meaning.partOfSpeech}</p>
          {props.meaning.definitions.map(function (definition, index) {
            return (
              <div key={index}>
                <ul>
                  <li>{definition.definition}</li>
                </ul>
                {definition.example === undefined ? null : (
                  <p className="fw-bold example-given">
                    Example:{" "}
                    <span className="fst-italic fw-light">
                      {definition.example}.
                    </span>
                  </p>
                )}
                <Synonyms synonyms={definition.synonyms} />
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
