import React from "react";

export default function Images(props) {
  if (props.images) {
    return (
      <div className="Images">
        <div className="row justify-content-center">
          {props.images.map(function (photo, index) {
            return (
              <div className="col align-self-center" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.tiny}
                    className="img-fluid rounded mb-3"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
