import React, { useEffect, useState } from "react";
import addPuppy from "./addPlayerFunc";

const AddPuppy = ({ apiUrl, players, setPuppyPlayers }) => {
  // //Hold my variables in state
  const [puppyName, setPuppyName] = useState("");
  const [puppyBreed, setPuppyBreed] = useState("");
  // onSubmit add the player to our object
  const handleSubmit = (event) => {
    event.preventDefault();

    addPuppy(puppyName, puppyBreed, apiUrl); //Pass breed, name, and api to my api function that will add player to database
    setPuppyPlayers([
      //Change state and add my inputs to the beginning of the new array of all puppies
      {
        id: players.length,
        name: puppyName,
        imageUrl:
          "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png",
      },
      ...players,
    ]);
    setPuppyBreed("");
    setPuppyName("");
  };
  const handleChange = (event) => {
    setPuppyName(event.target.value);
  };
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit} className="form">
        <label className="addLabel">Name:</label>
        <input
          type="text"
          name="name"
          value={puppyName}
          onChange={handleChange}
          className="addInput"
        />
        <label className="addLabel">Breed:</label>
        <input
          type="text"
          name="breed"
          value={puppyBreed}
          onChange={(event) => {
            setPuppyBreed(event.target.value);
          }}
          className="addInput"
        />
        <button type="submit" className="addButton">
          Add Puppy
        </button>
      </form>
    </div>
  );
};

export default AddPuppy;
