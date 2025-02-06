import React, { useState, useEffect, Component } from "react";

function Homepage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/posts.json");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="homepage">
      <h2>Blog Posts</h2>
      <div className="posts-container">
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;

