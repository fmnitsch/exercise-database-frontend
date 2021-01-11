import React from "react";
import "./Results.css";
import Exercise from "../Exercise/Exercise";

function Results(props) {
  return (
    <div id="search-results">
      <header>
        <h1>Your Results</h1>
      </header>
      {props.exercises.map((exercise) => (
        <Exercise
          key={exercise.id}
          name={exercise.name}
          muscles={exercise.muscles}
          description={exercise.description}
          level={exercise.level}
          video={exercise.video_link}
        />
      ))}
    </div>
  );
}

export default Results;
