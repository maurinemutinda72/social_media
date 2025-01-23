import React from "react";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import NewsFeed from "./components/NewsFeed";

const App = () => {
  return (
    <div className="app">
         <Header />
      <div className="main-content">
        <UserProfile />
        <NewsFeed />
      </div>
    </div>
  );
};

export default App;
