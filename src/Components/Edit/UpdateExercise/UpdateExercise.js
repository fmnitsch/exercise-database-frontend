import React from "react";
import { Link } from "react-router-dom";
import "./UpdateExercise.css";
import Db from "../../../util/db-access";

class UpdateExercise extends React.Component {
  state = {
    exerciseList: [],
  };

  componentDidMount() {
    this.getAllExercises();
  }

  getExerciseNameAndId = (e) => {
    console.log(e.target);
    this.props.updateName(e);
    this.props.updateId(e);
  };

  getAllExercises = async () => {
    const exercises = await Db.getAllExercises();
    this.setState({ exerciseList: exercises });
  };

  render() {
    return (
      <div className="edit">
        <h1>Add or update exercises</h1>
        <h2>Update Exercise</h2>
        <button onClick={this.props.changeMethod}>Or add a new one</button>
        <br />
        <label htmlFor="name">Choose an Exercise:</label>
        <select defaultValue="Select Exercise">
          <option value=""></option>
          {this.state.exerciseList.map((exercise) => {
            return (
              <option
                key={exercise.id}
                value={exercise.id}
                onClick={this.getExerciseNameAndId}
              >
                {exercise.name}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          id="description"
          defaultValue=""
          placeholder="enter a description"
          onChange={this.props.updateDescription}
        />
        <input
          type="text"
          id="video"
          defaultValue=""
          placeholder="enter youtube video link"
          onChange={this.props.updateVideo}
        />
        <p>What muscles does the exercise involve?</p>
        <input
          type="checkbox"
          id="chest"
          name="chest"
          value="chest"
          onChange={this.props.updateMuscles}
        />
        <label htmlFor="chest">Chest</label>
        <input
          type="checkbox"
          id="arms"
          name="arms"
          value="arms"
          onChange={this.props.updateMuscles}
        />
        <label htmlFor="arms">Arms</label>
        <input
          type="checkbox"
          id="upper-back"
          name="upper-back"
          value="upper-back"
          onChange={this.props.updateMuscles}
        />
        <label htmlFor="upper-back">Upper Back</label>
        <input
          type="checkbox"
          id="shoulders"
          name="shoulders"
          value="shoulders"
          onChange={this.props.updateMuscles}
        />
        <label htmlFor="shoulders">Shoulders</label>
        <input
          type="checkbox"
          id="core"
          name="core"
          value="core"
          onChange={this.props.updateMuscles}
        />
        <label htmlFor="core">Core</label>
        <input
          type="checkbox"
          id="legs"
          name="legs"
          value="legs"
          onChange={this.props.updateMuscles}
        />
        <label htmlFor="legs">Legs</label>
        <input
          type="checkbox"
          id="full-body"
          name="full-body"
          value="full-body"
          onChange={this.props.updateMuscles}
        />
        <label htmlFor="full-body">Full Body</label>
        <p>What experience level is required for this exercise?</p>
        <input
          type="radio"
          id="beginner"
          name="level"
          value="1"
          onChange={this.props.updateLevel}
        />
        <label htmlFor="beginner">Beginner</label>
        <input
          type="radio"
          id="intermediate"
          name="level"
          value="2"
          onChange={this.props.updateLevel}
        />
        <label htmlFor="intermediate">Intermediate</label>
        <input
          type="radio"
          id="advanced"
          name="level"
          value="3"
          onChange={this.props.updateLevel}
        />
        <label htmlFor="advanced">Advanced</label>
        <br />
        <button onClick={this.props.submit}>Update Exercise!</button>
        <Link to="/">
          <p>Back to search</p>
        </Link>
      </div>
    );
  }
}

export default UpdateExercise;
