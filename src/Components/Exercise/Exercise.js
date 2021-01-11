import React from "react";
import "./Exercise.css";

function Exercise(props) {
  return (
    <div id="exercise">
      <h2>{props.name}</h2>
      <h3>Muscle Group:</h3>
      <p>{props.muscles}</p>
      <h3>Description:</h3>
      <p>{props.description}</p>
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
  );
}

export default Exercise;
