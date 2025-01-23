import React, { useState } from "react";
import CommentSection from "./CommentSection";

const NewsFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Moureen Mutinda",
      content: "Hello, world! My first post here.",
      comments: ["Nice post!", "Welcome!"],
    },
    {
      id: 2,
      author: "Mutinda",
      content: "Loving the React ecosystem!",
      comments: ["Same here!", "React is amazing!"],
    },
  ]);

  return (
    <div className="news-feed">
      <h2>News Feed</h2>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h3>{post.author}</h3>
          <p>{post.content}</p>
          <CommentSection comments={post.comments} />
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
