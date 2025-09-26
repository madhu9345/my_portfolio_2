import React from "react";
import Sidebar from "./Sidebar";
import data from "./db.json"; // adjust path

function Clubs() {
  // direct access without fetch
  const clubs = data.clubs;

  return (
    <div className="clubs-page">
      <Sidebar className="sidebar" />

      <div className="clubs-content">
        <h2 className="clubs-title">My Club Participation</h2>

        <div className="clubs-cards">
          {clubs.map((club) => (
            <div key={club.id} className="club-card">
              <img src={club.img} alt={club.name} className="club-img" />
              <h3 className="club-name">{club.name}</h3>
              <p className="club-since">{club.since}</p>
              <p className="club-role">{club.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clubs;
