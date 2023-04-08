import React from "react";

const DisplaySinglePuppy = ({ singlePuppy, setSinglePuppy }) => {
  return (
    <div
      className="single-player-view"
      style={{ width: "30%", margin: "0 auto" }}
    >
      {singlePuppy ? (
        <div>
          {" "}
          <div className="header-info">
            <p className="pup-title">{singlePuppy.player.name}</p>
            <p className="pup-number">#{singlePuppy.player.id}</p>
          </div>
          <p>
            Team:{" "}
            {singlePuppy.player.team
              ? singlePuppy.player.team.name
              : "Unassigned"}
          </p>
          <p>Breed: {singlePuppy.player.breed}</p>
          <img src={singlePuppy.player.imageUrl} style={{ height: "500px" }} />
          <button
            onClick={() => {
              setSinglePuppy({}); //set our state to an empty object
            }}
            id="see-all"
          >
            Back to all players
          </button>
        </div>
      ) : (
        "...Loading"
      )}
    </div>
  );
};

export default DisplaySinglePuppy;
