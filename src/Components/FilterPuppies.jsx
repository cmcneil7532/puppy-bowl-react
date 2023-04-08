import React, { useState, useEffect } from "react";

const FilterPuppies = ({ players, setPuppyPlayers }) => {
  const [selectedPuppy, setSelectedPuppy] = useState("");
  useEffect(() => {
    console.log(selectedPuppy);

    const filterPuppies = players.filter((puppy) =>
      puppy.name.toLowerCase().includes(selectedPuppy.toLowerCase())
    );
    setPuppyPlayers(filterPuppies);
  }, [selectedPuppy]);

  return (
    <div>
      <form className="filterPuppy">
        <label htmlFor="search" className="filterLabel">
          Find puppy:
        </label>
        <input
          className="filterInput"
          name="name"
          type="text"
          value={selectedPuppy}
          onChange={(event) => {
            setSelectedPuppy(event.target.value);
          }}
        ></input>
      </form>
    </div>
  );
};

export default FilterPuppies;
