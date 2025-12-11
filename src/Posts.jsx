import React from "react";
import "./Posts.css";
import data from "./db.json";

function Posts() {
  const posts = data.posts || [];

  return (
    <main className="posts-main">
      <div className="posts-container">
        {posts.length > 0 ? (
          posts.map((post) => (
            <article className="post-card" key={post.id}>
              <h5 className="post-title">{post.title}</h5>

              <img className="post-image" src={post.image} alt={post.title} />

              <div className="post-meta">
                <a
                  href={post.github}
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub link"
                >
                  <img className="github-avatar" src="/assets/git1.webp" alt="GitHub" />
                </a>

                <div className="post-desc">
                  <p className="desc">{post.description}</p>
                  <p className="tech">{post.technologies}</p>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="loading">Loading Posts...</div>
        )}
      </div>
    </main>
  );
}

export default Posts;
