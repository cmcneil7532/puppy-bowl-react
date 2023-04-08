import React from "react";
import removePuppy from "./removePlayer";

const DisplayAllPuppies = ({ players, getSinglePuppy }) => {
  //create a seperate file to run my remove function
  //filter through my id  and find the one that was click and remove it

  return (
    <>
      <div id="all-players-container">
        {players
          ? players.map((player) => {
              return (
                <div className="single-player-card" key={player.id}>
                  <div className="header-info">
                    <p className="pup-title">{player.name}</p>
                    <p className="pup-number">{player.id}</p>
                  </div>
                  <img src={player.imageUrl} alt="the puppy" />
                  <button
                    onClick={() => {
                      getSinglePuppy(player.id);
                    }}
                    className="detail-button"
                    data-id={player.id}
                  >
                    See details
                  </button>
                  <button
                    className="delete-button"
                    data-id={player.id}
                    onClick={(event) => {
                      event.preventDefault();
                      removePuppy(player.id);
                      location.reload();
                    }}
                  >
                    Remove from roster
                  </button>
                </div>
              );
            })
          : "...Loading"}
      </div>
    </>
  );
};

export default DisplayAllPuppies;
