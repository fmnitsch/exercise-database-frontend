const baseUrl = "http://localhost:4000/api/exercises/";

const Db = {
  async getExerciseByName(name, level) {
    try {
      const response = await fetch(`${baseUrl}${name}?level=${level}`);
      if (!response.ok) {
        const message = `${response.status} That exercise isn't in the database`;
        throw new Error(message);
      } else if (response.ok) {
        const jsonResponse = await response.json();
        if (jsonResponse) {
          return jsonResponse.exercises;
        }
      }
    } catch (error) {
      alert(error);
    }
  },

  async getExerciseByBodyPart(bodyParts, level) {
    try {
      const response = await fetch(
        `${baseUrl}bodypart?muscles=${bodyParts}&level=${level}`
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        if (jsonResponse) {
          return jsonResponse.exercises;
        }
      }
    } catch (error) {
      alert(error);
    }
  },

  async getAllExercises() {
    try {
      const response = await fetch(
        `${baseUrl}`
      );
      const jsonResponse = await response.json();
      const exercises = await jsonResponse.exercises.map((exercise) => ({
        id: exercise.id,
        name: exercise.name,
        muscles: exercise.muscles,
        description: exercise.description,
        level: exercise.level,
        video: exercise.video_link,
      }));
      return exercises; 
    } catch (error) {
      alert(error);
    }
  },

  async addNewExercise(exercise) {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ exercise: exercise }),
    };
    try {
      const response = await fetch(`${baseUrl}`, fetchOptions);
      if (response.ok) {
        const jsonResponse = response.json();
        if (jsonResponse) {
          return jsonResponse.exercise;
        }
      }
    } catch (error) {
      alert(error);
    }
  },

  async updateExercise(exercise) {
    const fetchOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ exercise: exercise }),
    };
    try {
      const response = await fetch(`${baseUrl}${exercise.id}`, fetchOptions);
      if (response.ok) {
        const jsonResponse = response.json();
        if (jsonResponse) {
          return jsonResponse.exercise;
        }
      }
    } catch (error) {
      alert(error);
    }
  },
};

export default Db;
