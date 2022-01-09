import React from "react";
import ReactAudioPlayer from "react-audio-player";

import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics container-md">
      <div className="row justify-content-start">
        <div className="col-xl-4 col-lg-5 col-md-12 mb-3">
          <ReactAudioPlayer src={props.phonetic.audio} controls />
        </div>
        <div className="col-lg-6 col-md-12 pt-3">
          <h5>
            <span className="fw-bold pronunciation">Pronunciation:</span>{" "}
            {props.phonetic.text}
          </h5>
        </div>
      </div>
    </div>
  );
}
