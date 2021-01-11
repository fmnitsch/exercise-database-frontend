import React from "react";
import "./AddExercise.css"

function AddExercise(props) {
    return (
        <div id="edit">
          <h1>Add or update exercises</h1>
            <h2>Add a New Exercise</h2>
            <button onClick={props.changeMethod}>Or update an existing one</button>
            <br />
            <input
              type="text"
              id="name"
              defaultValue=""
              placeholder="exercise name"
              onChange={props.updateName}
            />
            <input
              type="text"
              id="description"
              defaultValue=""
              placeholder="enter a description"
              onChange={props.updateDescription}
            />
            <input
              type="text"
              id="video"
              defaultValue=""
              placeholder="enter youtube video link"
              onChange={props.updateVideo}
            />
            <p>What muscles does the exercise involve?</p>
            <input
              type="checkbox"
              id="chest"
              name="chest"
              value="chest"
              onChange={props.updateMuscles}
            />
            <label htmlFor="chest">Chest</label>
            <input
              type="checkbox"
              id="arms"
              name="arms"
              value="arms"
              onChange={props.updateMuscles}
            />
            <label htmlFor="arms">Arms</label>
            <input
              type="checkbox"
              id="upper-back"
              name="upper-back"
              value="upper-back"
              onChange={props.updateMuscles}
            />
            <label htmlFor="upper-back">Upper Back</label>
            <input
              type="checkbox"
              id="shoulders"
              name="shoulders"
              value="shoulders"
              onChange={props.updateMuscles}
            />
            <label htmlFor="shoulders">Shoulders</label>
            <input
              type="checkbox"
              id="core"
              name="core"
              value="core"
              onChange={props.updateMuscles}
            />
            <label htmlFor="core">Core</label>
            <input
              type="checkbox"
              id="legs"
              name="legs"
              value="legs"
              onChange={props.updateMuscles}
            />
            <label htmlFor="legs">Legs</label>
            <input
              type="checkbox"
              id="full-body"
              name="full-body"
              value="full-body"
              onChange={props.updateMuscles}
            />
            <label htmlFor="full-body">Full Body</label>
            <p>What experience level is required for this exercise?</p>
            <input
              type="radio"
              id="beginner"
              name="level"
              value="1"
              onChange={props.updateLevel}
            />
            <label htmlFor="beginner">Beginner</label>
            <input
              type="radio"
              id="intermediate"
              name="level"
              value="2"
              onChange={props.updateLevel}
            />
            <label htmlFor="intermediate">Intermediate</label>
            <input
              type="radio"
              id="advanced"
              name="level"
              value="3"
              onChange={props.updateLevel}
            />
            <label htmlFor="advanced">Advanced</label>
            <br />
            <button onClick={props.submit}>Submit New Exercise!</button>
        </div>
      );
};

export default AddExercise;