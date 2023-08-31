import React from "react";

function Comment({ user, comment }) {
  return(
    <div>
      <h3>{user}</h3>
      <p>{comment}</p>
      <button className="delete-button">🗑</button>
    </div>
  )
}

export default Comment;


/*
import React from "react";

function Comment({ user, comment }) {
  return(
    <div>
      <h3>{user}</h3>
      <p>{comment}</p>
      <button className="delete-button">🗑</button>
    </div>
  )
}

export default Comment;
*/