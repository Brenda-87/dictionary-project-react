import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <ReactAudioPlayer src={props.phonetic.audio} controls />
      <br />
      <br />
      {props.phonetic.text}
      <br />
    </div>
  );
}
