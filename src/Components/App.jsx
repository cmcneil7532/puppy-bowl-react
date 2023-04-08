import React, { useEffect, useState } from "react";
import DisplayAllPuppies from "./DisplayAllPuppies";
import DisplaySinglePuppy from "./DisplaySinglePuppy";
import AddPuppy from "./AddPuppy";
import FilterPuppies from "./FilterPuppies";

const App = () => {
  const cohort = "2303-ftb-et-web-ft"; //Cohort
  const apiUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${cohort}/players`; //url

  const [puppyPlayers, setPuppyPlayers] = useState([]);
  const [singlePuppy, setSinglePuppy] = useState({});

  useEffect(() => {
    const getAllPuppies = async () => {
      try {
        const response = await fetch(apiUrl); //Fetch data from url
        const { data } = await response.json(); //parse into json format
        console.log(data, "this is my data");
        setPuppyPlayers(data.players); // set puppy data to state
      } catch (error) {
        console.error(error);
      }
    };
    getAllPuppies();
  }, []);
  const getSinglePuppy = async (puppyId) => {
    try {
      //when player clicks on an individual dog we will render the single player data
      const response = await fetch(`${apiUrl}/${puppyId}`);
      const data = await response.json();
      setSinglePuppy(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {singlePuppy.data ? (
        <DisplaySinglePuppy
          singlePuppy={singlePuppy.data}
          setSinglePuppy={setSinglePuppy}
        />
      ) : (
        <>
          <AddPuppy
            apiUrl={apiUrl}
            players={puppyPlayers}
            setPuppyPlayers={setPuppyPlayers}
          />
          <FilterPuppies
            players={puppyPlayers}
            setPuppyPlayers={setPuppyPlayers}
          />
          <DisplayAllPuppies
            players={puppyPlayers}
            getSinglePuppy={getSinglePuppy}
            apiUrl={apiUrl}
            setPuppyPlayers={setPuppyPlayers}
          />
        </>
      )}
    </div>
  );
};

export default App;
