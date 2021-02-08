import React from "react";
import "./Results.css";
import Exercise from "../Exercise/Exercise";

function Results(props) {
  const exercises = props.exercises || [];

  if (props.exercises) {
    return (
      <div id="results" className="search-results">
        <h2>Your Results</h2>
        {exercises.map((exercise) => (
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
  } else {
    return <div id="results" className="search-results"></div>;
  }
}

export default Results;
