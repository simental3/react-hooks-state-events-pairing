import React, { useState } from 'react';
import Comments from "./Comments";

function Vote({ initialUpvotes, initialDownvotes, comments }) {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [downvotes, setDownvotes] = useState(initialDownvotes);

  function handleUpvote() {
    setUpvotes((upvote) => upvote +1)
  }

  function handleDownvote() {
    setDownvotes((downvotes) => downvotes +1)
  }

  return (
    <div>
      <button onClick={handleUpvote}>{upvotes}👍</button>
      <button onClick={handleDownvote}>{downvotes}👎</button>
      <Comments comments={comments}  />
    </div>
  )
}

export default Vote;

/*
import React, { useState } from 'react';
import Comments from "./Comments";

function Vote({ initialUpvotes, initialDownvotes, comments }) {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [downvotes, setDownvotes] = useState(initialDownvotes);

  function handleUpvote() {
    setUpvotes((upvote) => upvote +1)
  }

  function handleDownvote() {
    setDownvotes((downvotes) => downvotes +1)
  }

  return (
    <div>
      <button onClick={handleUpvote}>{upvotes}👍</button>
      <button onClick={handleDownvote}>{downvotes}👎</button>
      <Comments comments={comments}  />
    </div>
  )
}

export default Vote;
*/