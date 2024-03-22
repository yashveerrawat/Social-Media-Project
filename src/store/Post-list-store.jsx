import { createContext, useReducer } from "react";

export const Postlist = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currpostList, action) => {
  let newPostList = currpostList;

  if (action.type === "DELETE_POST") {
    newPostList = currpostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currpostList];
  }

  return newPostList;
};

const PostlistProvider = ({ children }) => {
  const [postList, dispachPostList] = useReducer(postListReducer, []);

  const addPost = (userId, PostTitle, Postbody, reactions, tags) => {
    dispachPostList({
      type: "ADD_POST",
      payload: {
        id: userId,
        title: PostTitle,
        body: Postbody,
        reactions: reactions,
        userId: userId,
        tags: [tags],
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispachPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispachPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <Postlist.Provider
      value={{
        postList: postList,
        addPost: addPost,
        addInitialPosts,
        deletePost: deletePost,
      }}
    >
      {children}
    </Postlist.Provider>
  );
};

/*const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "going to mumbai",
    body: "going for a vaction",
    reactions: "23",
    userId: "user_8",
    tags: ["vaction", "mumbai", "enjoy"],
  },
  {
    id: "2",
    title: "hgdyuctdshisdhui",
    body: "kjcdisch jdsydsuhc chkcjoiio",
    reactions: "98",
    userId: "user_9",
    tags: ["dcnuidcu", "mkkvjfuy", "yfeufhenjh"],
  },
];*/

export default PostlistProvider;
