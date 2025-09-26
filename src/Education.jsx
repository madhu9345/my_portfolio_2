import React, { useState } from "react";
import Sidebar from "./Sidebar";
// directly import the JSON file
import data from "./db.json"; // adjust path if needed

function Education() {
  // initialize state from imported JSON
  const [education, setEducation] = useState(
    Array.isArray(data.education) ? data.education : []
  );

  return (
    <div className="education-page">
      <Sidebar className="sidebar" />

      <div className="education-content">
        <h2 className="education-title">My Education</h2>

        <div className="education-cards">
          {education.length === 0 ? (
            <p style={{ color: "#fff" }}>Loading education...</p>
          ) : (
            education.map((item) => (
              <div key={item.id} className="education-card">
                <h3 className="education-degree">{item.degree}</h3>
                <p className="education-institution">{item.institution}</p>
                <p className="education-duration">{item.duration}</p>
                <p className="education-result">{item.result}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Education;
