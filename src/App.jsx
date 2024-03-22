import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Postlist from "./components/Postlist";
import Sidebar from "./components/Sidebar";
import PostlistProvider from "./store/Post-list-store";

function App() {
  const [SelectedTab, setSelectedTab] = useState("Home");

  return (
    <PostlistProvider>
      <div className="app-container">
        <Sidebar
          SelectedTab={SelectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {SelectedTab === "Home" ? (
            <Postlist></Postlist>
          ) : (
            <CreatePost></CreatePost>
          )}
          ;<Footer></Footer>
        </div>
      </div>
    </PostlistProvider>
  );
}

export default App;
