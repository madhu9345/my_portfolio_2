import React, { useState } from 'react';
// Import your JSON file directly
import data from "./db.json"; // adjust path if needed (../db.json if in src)

function Stories() {
  // directly get stories array from db.json
  const [stories, setStories] = useState(
    Array.isArray(data.stories) ? data.stories : []
  );

  return (
    <div className="story d-flex">
      {stories.length > 0 ? (
        stories.map((story) => (
          <div key={story.id} className="mx-3 text-center">
            <div className="gradient-border">
              {/* Clickable image */}
              <a
                href={story.socialMediaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={story.imageUrl}
                  alt={story.name}
                  className="story-dp rounded-circle"
                />
              </a>
            </div>
            <p
              className="text-truncate"
              style={{ width: "80px", textAlign: "center" }}
            >
              {story.name}
            </p>
          </div>
        ))
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
}

export default Stories;
