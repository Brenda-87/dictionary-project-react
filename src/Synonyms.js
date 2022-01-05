import React from "react";

export default function Synonyms(props) {
  return (
    <div className="Synonyms">
      {props.synonyms.length === 0 ? null : (
        <>
          <p className="fw-bold">Synonyms </p>
          {props.synonyms.map(function (synonym, index) {
            return (
              <span className="badge bg-light text-dark m-1" key={index}>
                {synonym}
              </span>
            );
          })}
        </>
      )}
    </div>
  );
}
