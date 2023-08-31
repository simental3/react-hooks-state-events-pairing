import Video from "./Video.js";
import Vote from "./Vote";
import "../index.css"
import video from "../data/video.js";

// Add upvote/downvote buttons to each comment
// Add a search bar to search comments by username
// Add a "Remove Comment" button to delete comments from the page

// Add a sorting feature to sort the comments

function App() {
  const { embedUrl, title, views, createdAt, upvotes, downvotes, comments } = video

  return (
    <div className="App">
      <Video
        embedURL={embedUrl} 
        title={title}
        views={views}
        createdAt={createdAt}
      />
      <Vote initialUpvotes={upvotes} initialDownvotes={downvotes} comments={comments} />
    </div>
  );
}

export default App;
