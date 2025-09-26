import React, { useState } from 'react';
// import your db.json directly
import data from "./db.json"; // adjust path if needed

function Suggestions() {
  // take profile object directly from db.json
  const [profile] = useState(data.profile || null);
  // take certifications array directly from db.json
  const [suggest] = useState(Array.isArray(data.certifications) ? data.certifications : []);

  return (
    <div>
      <div className='suggestions w-75 m-4'>
        {profile ? (
          <div className="d-flex">
            <img
              className="ff dp rounded-circle"
              src={profile.image}
              alt="Profile Picture"
            />
            <h5 className='m-2 fs-4'>{profile.name}</h5>
            <small className='d-flex fs-6 m-2 fw-bold ms-auto text-primary'>
              Switch
            </small>
          </div>
        ) : (
          <p>Loading..</p>
        )}

        <div className='d-flex '>
          <small className="sug mt-2 lead">Certifications</small>
          <b className='ms-auto mt-2'>See All</b>
        </div>

        {suggest.length > 0 ? (
          <div>
            {suggest.map((suggests) => (
              <div className="suggest mt-3" key={suggests.id}>
                <div className="d-flex">
                  <img
                    className="ff dp rounded-circle"
                    src={suggests.url}
                    alt="Profile Picture"
                  />
                  <h5 className='m-2 fs-6'>{suggests.name}</h5>
                  <a
                    href={suggests.link}
                    className="d-flex ms-auto text-decoration-none text-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className='text-primary ms-auto'>Follow</p>
                  </a>
                </div>

                <div className='cal d-flex'>
                  <i className="bi bi-calendar"></i>
                  <p className='lead fs-6'>{suggests.time}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
}

export default Suggestions;
