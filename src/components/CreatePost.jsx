import { useContext, useRef } from "react";
import { Postlist } from "../store/Post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(Postlist);

  const userIdElement = useRef();
  const PostTitleElement = useRef();
  const PostbodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handeleOnSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const PostTitle = PostTitleElement.current.value;
    const Postbody = PostbodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split("");

    addPost(userId, PostTitle, Postbody, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handeleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">
          Enter your user Id here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your user Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={PostTitleElement}
          className="form-control"
          id="Title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="post Content" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={PostbodyElement}
          className="form-control"
          id="body"
          placeholder="Tell us more about it..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="How many peoples reacted to this post..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your Hashtags here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="reactions"
          placeholder="Please enter tags using space..."
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
