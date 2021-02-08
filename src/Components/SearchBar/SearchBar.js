import React from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";

function SearchBar(props) {
  const handleSubmitClick = (e) => {
    e.preventDefault();
    const inputField = document.getElementById("name-input");
    const beginner = document.getElementById("beginner");
    const intermediate = document.getElementById("intermediate");
    const advanced = document.getElementById("advanced");
    const resultsPosition = document.getElementById("results-container")
      .offsetTop;
    if (props.searchBy === "name" && inputField.value === "") {
      return alert("please enter an exercise name");
    } else if (
      !beginner.checked &&
      !intermediate.checked &&
      !advanced.checked
    ) {
      return alert("please enter one or more experience levels");
    } else {
      props.onSearch();
      window.scrollTo({
        top: resultsPosition,
        left: 0,
        behavior: "smooth",
      });
      beginner.checked = false;
      intermediate.checked = false;
      advanced.checked = false;
    }
  };

  const updateSearchTerm = (e) => {
    props.updateSearchTerm(e);
  };

  const updateExperienceLevel = (e) => {
    e.target.checked
      ? props.onAddExperienceLevel(e)
      : props.onRemoveExperienceLevel(e);
  };

  const updateBodyParts = (e) => {
    e.target.checked ? props.onAddBodyPart(e) : props.onRemoveBodyPart(e);
  };

  if (props.searchBy === "name") {
    return (
      <section className="search-bar">
        <form
          id="search-by-name"
          className="search"
          onSubmit={handleSubmitClick}
        >
          <h2>Search By Name</h2>
          <input
            type="text"
            id="name-input"
            defaultValue=""
            placeholder="enter an exercise name"
            onChange={updateSearchTerm}
          />
          <p className="option">Select your experience level(s)</p>
          <input
            type="checkbox"
            className="checkbox"
            id="beginner"
            name="beginner"
            value="1"
            onChange={updateExperienceLevel}
          />
          <label htmlFor="beginner">Beginner</label>
          <input
            type="checkbox"
            className="checkbox"
            id="intermediate"
            name="intermediate"
            value="2"
            onChange={updateExperienceLevel}
          />
          <label htmlFor="intermediate">Intermediate</label>
          <input
            type="checkbox"
            className="checkbox"
            id="advanced"
            name="advanced"
            value="3"
            onChange={updateExperienceLevel}
          />
          <label htmlFor="advanced">Advanced</label>
          <br />

          <button className="submit-search" /*onClick={handleSubmitClick}*/>
            Search!
          </button>

          <p
            className="option switch-search"
            onClick={() => props.onChangeSearchBy("body part")}
          >
            Or Search by Body Part
          </p>
        </form>
        <p>Want to add an exercise to the database?</p>
        <Link to="/edit">
          <button>Click here to add!</button>
        </Link>
      </section>
    );
  } else {
    return (
      <section className="search-bar">
        <form
          id="search-by-body-part"
          className="search"
          onSubmit={handleSubmitClick}
        >
          <h2>Search By Body Part</h2>
          <input
            type="checkbox"
            className="checkbox"
            id="chest"
            name="chest"
            value="chest"
            onChange={updateBodyParts}
          />
          <label htmlFor="chest">Chest</label>
          <input
            type="checkbox"
            className="checkbox"
            id="arms"
            name="arms"
            value="arms"
            onChange={updateBodyParts}
          />
          <label htmlFor="arms">Arms</label>
          <input
            type="checkbox"
            className="checkbox"
            id="upper-back"
            name="upper-back"
            value="upper-back"
            onChange={updateBodyParts}
          />
          <label htmlFor="upper-back">Upper Back</label>
          <input
            type="checkbox"
            className="checkbox"
            id="shoulders"
            name="shoulders"
            value="shoulders"
            onChange={updateBodyParts}
          />
          <label htmlFor="shoulders">Shoulders</label>
          <input
            type="checkbox"
            className="checkbox"
            id="core"
            name="core"
            value="core"
            onChange={updateBodyParts}
          />
          <label htmlFor="core">Core</label>
          <input
            type="checkbox"
            className="checkbox"
            id="legs"
            name="legs"
            value="legs"
            onChange={updateBodyParts}
          />
          <label htmlFor="legs">Legs</label>
          <input
            type="checkbox"
            className="checkbox"
            id="full-body"
            name="full-body"
            value="full-body"
            onChange={updateBodyParts}
          />
          <label htmlFor="full-body">Full Body</label>
          <p id="experience-level">Experience Level</p>
          <input
            type="checkbox"
            className="checkbox"
            id="beginner"
            name="beginner"
            value="1"
            onChange={updateExperienceLevel}
          />
          <label htmlFor="beginner">Beginner</label>
          <input
            type="checkbox"
            className="checkbox"
            id="intermediate"
            name="intermediate"
            value="2"
            onChange={updateExperienceLevel}
          />
          <label htmlFor="intermediate">Intermediate</label>
          <input
            type="checkbox"
            className="checkbox"
            id="advanced"
            name="advanced"
            value="3"
            onChange={updateExperienceLevel}
          />
          <label htmlFor="advanced">Advanced</label>
          <br />

          <button className="submit-search" /*onClick={handleSubmitClick}*/>
            Search!
          </button>

          <p
            className="option switch-search"
            onClick={() => props.onChangeSearchBy("name")}
          >
            Or Search by Exercise Name
          </p>
        </form>
        <p>Want to add an exercise to the database?</p>
        <Link to="/edit">
          <button>Click here to add!</button>
        </Link>
      </section>
    );
  }
}

export default SearchBar;
