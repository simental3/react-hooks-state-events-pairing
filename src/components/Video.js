import React from "react";

function Video({ embedURL, title, views, createdAt }) {
  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={embedURL}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
      <h1>{title}</h1>
      <p>
        {views} Views | Uploaded {createdAt}
      </p>
    </div>
  )
}

export default Video;
