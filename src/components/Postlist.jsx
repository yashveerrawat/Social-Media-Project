import { useContext } from "react";
import Post from "./Post";
import { Postlist as PostlistData } from "../store/Post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const Postlist = () => {
  const { postList, addInitialPosts } = useContext(PostlistData);

  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage OnGetPostsClicked={handleGetPostsClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default Postlist;
