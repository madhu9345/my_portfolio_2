import React from 'react';
import './index.css';     // new CSS file
import data from './db.json';

function Posts() {
  const posts = data.posts;

  return (
    <div className="main-content"> {/* moved margin logic to CSS */}
      <div className="po d-flex justify-content-center">
        {posts && posts.length > 0 ? (
          <div className="posts-wrapper">
            {posts.map((post) => (
              <div className="post my-3" key={post.id}>
                <div className="d-flex align-items-start">
                  <h5 className="mt-0 post-title">{post.title}</h5>
                </div>

                {/* main image */}
                <img className="post-image" src={post.image} alt={post.title} />

                {/* GitHub link */}
                <div className="github-link mt-2">
                  <a
                    href={post.github}
                    className="text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="dp rounded-circle"
                      src="/assets/git1.webp"
                      alt="GitHub"
                    />
                  </a>
                </div>

                {/* description and tech */}
                <div className="mt-2">
                  <b className="text-truncate post-desc">{post.description}</b>
                </div>
                <p className="post-tech">{post.technologies}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading Posts</div>
        )}
      </div>
    </div>
  );
}

export default Posts;
