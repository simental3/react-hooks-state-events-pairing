import React from "react";

function Comment({ user, comment }) {
  return(
    <div>
      <h3>{user}</h3>
      <p>{comment}</p>
      <button className="delete">🗑️</button>
      <button className="delete">&#x1F5D1;</button>
    </div>
  )
}

export default Comment;