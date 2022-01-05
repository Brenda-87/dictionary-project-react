import React from "react";
import Meaning from "./Meaning";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results rounded m-5 p-3">
        <h3>
          Definition of <mark>{props.results.word}</mark>
        </h3>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <p>
                <Meaning meaning={meaning} />
              </p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
