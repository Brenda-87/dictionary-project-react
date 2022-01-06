import React from "react";
import ReactAudioPlayer from "react-audio-player";

import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <div className="row">
        <div className="col-4 mb-3">
          <ReactAudioPlayer src={props.phonetic.audio} controls />
        </div>
        <div className="col-8">
          <h4>
            <span className="fw-bold">Pronunciation:</span>{" "}
            {props.phonetic.text}
          </h4>
        </div>
      </div>
    </div>
  );
}
