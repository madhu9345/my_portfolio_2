import React from 'react';

import data from './db.json'; 

function Posts() {
  
  const posts = data.posts;

  return (
    <div className="po d-flex justify-content-center">
      {posts && posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <div className="post my-3" key={post.id}>
              <div className="d-flex">
                <h5 className="mt-5">{post.title}</h5>
              </div>

              {/* main image */}
              <img className="img" src={post.image} alt={post.title} />

              {/* GitHub link */}
              <div>
                <a
                  href={post.github}
                  className="text-decoration-none text-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* make sure this image exists in public/assets */}
                  <img
                    className="dp rounded-circle"
                    src="/assets/git1.webp"
                    alt="GitHub"
                  />
                </a>
              </div>

              {/* description and tech */}
              <div>
                <b className="text-truncate">{post.description}</b>
              </div>
              <p>{post.technologies}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading Posts</div>
      )}
    </div>
  );
}

export default Posts;
