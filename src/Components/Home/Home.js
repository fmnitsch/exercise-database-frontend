import React from "react";
import "./Home.css";
import Title from "../Title/Title";
import SearchBar from "../SearchBar/SearchBar";
import Results from "../Results/Results";
import Db from "../../util/db-access";

class Home extends React.Component {
  state = {
    searchBy: "name",
    searchTerm: "",
    bodyParts: [],
    experienceLevels: [],
    exercises: [],
  };

  changeSearchBy = (type) => {
    this.setState({ searchBy: type });
  };

  addExperienceLevel = (e) => {
    let tempArr = this.state.experienceLevels;
    const level = e.target.value;
    tempArr.push(level);
    this.setState({ experienceLevels: tempArr });
  };

  removeExperienceLevel = (e) => {
    const level = e.target.value;
    this.setState({
      experienceLevels: this.state.experienceLevels.filter(function (element) {
        return element !== level;
      }),
    });
  };

  addBodyPart = (e) => {
    let tempArr = this.state.bodyParts;
    const bodyPart = e.target.value;
    tempArr.push(bodyPart);
    this.setState({ bodyParts: tempArr });
  };

  removeBodyPart = (e) => {
    const bodyPart = e.target.value;
    this.setState({
      bodyParts: this.state.bodyParts.filter(function (element) {
        return element !== bodyPart;
      }),
    });
  };

  updateSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  search = async () => {
    const levels = this.state.experienceLevels.join("");
    const bodyParts = this.state.bodyParts.join("_");
    const searchTerm = this.state.searchTerm;
    let foundExercises;
    if (this.state.searchBy === "name") {
      foundExercises = await Db.getExerciseByName(searchTerm, levels);
    } else {
      foundExercises = await Db.getExerciseByBodyPart(bodyParts, levels);
    }
    this.setState({
      searchTerm: "",
      bodyParts: [],
      experienceLevels: [],
      exercises: foundExercises,
    });
    document.querySelector(".search").reset();
  };

  render() {
    return (
      <div className="App">
        <Title />
        <SearchBar
          onSearch={this.search}
          searchBy={this.state.searchBy}
          searchTerm={this.searchTerm}
          bodyParts={this.state.bodyParts}
          exercises={this.state.exercises}
          updateSearchTerm={this.updateSearchTerm}
          onChangeSearchBy={this.changeSearchBy}
          onAddBodyPart={this.addBodyPart}
          onRemoveBodyPart={this.removeBodyPart}
          onAddExperienceLevel={this.addExperienceLevel}
          onRemoveExperienceLevel={this.removeExperienceLevel}
        />
        <div id="results-container">
          <Results exercises={this.state.exercises} />
        </div>
      </div>
    );
  }
}

export default Home;
