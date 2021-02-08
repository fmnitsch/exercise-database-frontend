import React from "react";
import "./Exercise.css";

function Exercise(props) {
  return (
    <div className="exercise">
      <h3>{props.name}</h3>
      <h4>
        Muscle Group: {props.muscles.replace(/^\w/, (c) => c.toUpperCase())}
      </h4>
      <h4>Description:</h4>
      <p>{props.description}</p>
      <div className="iframe-wrapper">
        <iframe
          title="video-player"
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${props.video}`}
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Exercise;
