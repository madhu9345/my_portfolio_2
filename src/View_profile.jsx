import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
// Import JSON directly if inside /src
import data from "./db.json";  

function View_profile() {
  const [view_profile, set_view_profile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Directly use db.json data
    if (data && data.view_profile) {
      set_view_profile(data.view_profile);
    }
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Column */}
        <div className="col-md-3 col-lg-2 p-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 p-4 profile-container">
          {view_profile ? (
            <div className="d-flex align-items-center profile-header">
              <img
                src={view_profile.img}
                className="profile-photo rounded-circle"
                alt={view_profile.name}
              />
              <div className="ms-4">
                <h3 className="fw-bold">{view_profile.name}</h3>
                <br />
                <button
                  className="btn btn-outline-secondary btn-sm me-2"
                  onClick={() => navigate("/edit_profile")}
                >
                  Edit Profile
                </button>
                <br />
                <div className="d-flex mt-3">
                  <p className="me-4">
                    <b>{view_profile.projects}</b> Projects
                  </p>
                  <p className="me-4">
                    <b>{view_profile.problems}</b> Problems
                  </p>
                  <p>
                    <b>{view_profile.certifications}</b> Certifications
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">Loading..</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default View_profile;
