import React from "react";
import "./Edit.css";
import AddExercise from "./AddExercise/AddExercise";
import UpdateExercise from "./UpdateExercise/UpdateExercise";
import Db from "../../util/db-access";

class Edit extends React.Component {
  state = {
    name: "",
    muscles: [],
    description: "",
    level: null,
    video: "",
    id: null,
    method: "addNew"
  };

  addMuscles = (e) => {
    let tempArr = this.state.muscles;
    const muscle = e.target.value;
    tempArr.push(muscle);
    this.setState({ muscles: tempArr });
  };

  removeMuscles = (e) => {
    const muscle = e.target.value;
    this.setState({
      muscles: this.state.muscles.filter(function (element) {
        return element !== muscle;
      }),
    });
  };

  updateName = (e) => {
    if (this.state.method === "addNew") {
      this.setState({ name: e.target.value });
    } else {
      this.setState({ name: e.target.textContent });
    } 
  };

  updateId = (e) => {
    this.setState({ id: e.target.value })
  }

  updateMuscles = (e) => {
    e.target.checked ? this.addMuscles(e) : this.removeMuscles(e);
  };

  updateDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  updateLevel = (e) => {
    this.setState({ level: e.target.value });
  };

  updateVideo = (e) => {
    this.setState({ video: e.target.value });
  };

  changeMethod = () => {
    const toggle = this.state.method === "addNew" ? "UpdateCurrent" : "addNew"
    this.setState({ method: toggle});
  };

  submitNew = async () => {
    const name = this.state.name;
    const muscles = this.state.muscles.toString();
    const description = this.state.description;
    const level = this.state.level;
    const video = this.state.video;
    const exercise = {
      name: name,
      muscles: muscles,
      description: description,
      level: level,
      video: video,
    };
    const addedExercise = await Db.addNewExercise(exercise);
    this.setState({
      name: "",
      muscles: [],
      description: "",
      level: null,
      video: "",
    });
    console.log(addedExercise);
    return addedExercise;
  };

  submitUpdate = async () => {
    const name = this.state.name;
    const muscles = this.state.muscles.toString();
    const description = this.state.description;
    const level = this.state.level;
    const video = this.state.video;
    const id = this.state.id;
    const exercise = {
      id: id,
      name: name,
      muscles: muscles,
      description: description,
      level: level,
      video: video,
    };
    const addedExercise = await Db.updateExercise(exercise);
    this.setState({
      id: null,
      name: "",
      muscles: [],
      description: "",
      level: null,
      video: "",
    });
    console.log(addedExercise);
    return addedExercise;
  };

  render() {
    if (this.state.method === "addNew") {
      return (
      <AddExercise
        updateName={this.updateName}
        updateMuscles={this.updateMuscles}
        updateDescription={this.updateDescription}
        updateLevel={this.updateLevel}
        updateVideo={this.updateVideo}
        changeMethod={this.changeMethod}
        submit={this.submitNew}
       />
      )
    } else {
      return <UpdateExercise 
        updateName={this.updateName}
        updateId={this.updateId}
        updateMuscles={this.updateMuscles}
        updateDescription={this.updateDescription}
        updateLevel={this.updateLevel}
        updateVideo={this.updateVideo}
        changeMethod={this.changeMethod}
        submit={this.submitUpdate}/>
    }
    
  }
}

export default Edit;
