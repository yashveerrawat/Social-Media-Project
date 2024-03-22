const WelcomeMessage = ({ OnGetPostsClicked }) => {
  return (
    <center className="Welcome-message">
      <h1>There Are No Posts</h1>
      <button
        type="button"
        onClick={OnGetPostsClicked}
        className="btn btn-primary"
      >
        Get Posts From Server
      </button>
    </center>
  );
};
export default WelcomeMessage;
