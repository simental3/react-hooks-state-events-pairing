import React, { useState } from "react";
import Comment from "./Comment";

function Comments({ comments }) {
  const [isShowing, setIsShowing] = useState(true)

  const length = comments.length;
  const commentItems = comments.map(({ id, user, comment }) => (
    <Comment key={id} user={user} comment={comment} />
  ))

  console.log(comments)
  // 🔍 ⭕ 👁

  return(
    <div>
      <div>
        {/* <button onClick={handleToggleComments}> */}
        <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
          {isShowing ? "🚫 Hide" : "👁 Show"} Comments
        </button>
      </div>
      <hr />
      <h2>{length} Comments</h2>
      {isShowing ? commentItems : null}
    </div>
  )
}

export default Comments;






// function Comments({ comments }) {
//   const [isShowing, setIsShowing] = useState(true)

//   const length = comments.length;
//   const commentItems = comments.map(({ id, user, comment }) => (
//     <Comment key={id} user={user} comment={comment} />
//   ))

//   return(
//     <div>
//       <div>
//         {/* <button onClick={handleToggleComments}> */}
//         <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
//           {isShowing ? "🚫 Hide" : "👁 Show"} Comments
//         </button>
//       </div>
//       <hr />
//       <h2>{length} Comments</h2>
//       {isShowing ? commentItems : null}
//     </div>
//   )
// }

// export default Comments;