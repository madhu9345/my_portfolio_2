import React, { useState } from "react";
import Sidebar from "./Sidebar";
import data from "./db.json";

function EditProfile() {
  const [profile, setProfile] = useState(data.view_profile);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated profile:", profile);
    alert("Profile updated locally (won’t persist on deploy)");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-2 p-0">
          <Sidebar />
        </div>

        <div className="col-md-9 col-lg-10 p-4">
          <h2 className="mb-4">Edit Profile</h2>
          <form onSubmit={handleSubmit} className="w-50">
            <div className="mb-3">
              <label className="form-label">Profile Picture URL</label>
              <input
                type="text"
                name="img"
                className="form-control"
                value={profile.img}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={profile.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 d-flex gap-3">
              <div>
                <label className="form-label">Projects</label>
                <input
                  type="number"
                  name="projects"
                  className="form-control"
                  value={profile.projects}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form-label">Problems</label>
                <input
                  type="number"
                  name="problems"
                  className="form-control"
                  value={profile.problems}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form-label">Certifications</label>
                <input
                  type="number"
                  name="certifications"
                  className="form-control"
                  value={profile.certifications}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
