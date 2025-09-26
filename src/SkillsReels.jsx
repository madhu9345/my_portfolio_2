import React, { useState } from "react";
import Sidebar from "./Sidebar";
// directly import your JSON file
import data from "./db.json"; // adjust path if needed

function SkillsReels() {
  // initialize skills state from db.json
  const [skills, setSkills] = useState(
    Array.isArray(data.skills) ? data.skills : []
  );

  const handleActionClick = (action, name) => {
    alert(`${action} clicked on ${name}!`);
  };

  return (
    <div className="skills-page">
      <Sidebar />

      <div className="reels-feed">
        {skills.map((skill) => (
          <div key={skill.id} className="reel-card">
            {/* Skill image/video */}
            <img src={skill.img} alt={skill.name} className="reel-video" />

            {/* Actions */}
            <div className="reel-actions">
              <button
                className="action-btn"
                onClick={() => handleActionClick("Like", skill.name)}
              >
                ❤️<span className="count">100</span>
              </button>
              <button
                className="action-btn"
                onClick={() => handleActionClick("Comment", skill.name)}
              >
                💬<span className="count">20</span>
              </button>
              <button
                className="action-btn"
                onClick={() => handleActionClick("Share", skill.name)}
              >
                🔗
              </button>
              <button
                className="action-btn"
                onClick={() => handleActionClick("Save", skill.name)}
              >
                📌
              </button>
            </div>

            {/* Caption */}
            <div className="reel-caption">
              <div className="skill-profile">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="skill-icon"
                />
                <p className="skill-name">@{skill.name}</p>
              </div>
              <p className="skill-description">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsReels;
