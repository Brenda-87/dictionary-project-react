import React from "react";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning container">
      <div className="row">
        <div className="col">
          <h4>{props.meaning.partOfSpeech}</h4>
          {props.meaning.definitions.map(function (definition, index) {
            return (
              <div key={index}>
                <p>{definition.definition}</p>
                {definition.example === undefined ? null : (
                  <p className="fst-italic">Example: {definition.example}</p>
                )}

                <div className="col">
                  {definition.synonyms.length === 0 ? null : (
                    <div>
                      {" "}
                      <p>Synonyms </p>
                      {definition.synonyms.map(function (synonym) {
                        return (
                          <span className="badge bg-light text-dark m-1">
                            {" "}
                            {synonym}{" "}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>

                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
