import React from "react";

const UserProfile = () => {
  const user = {
    name: "Moureen Mutinda",
    bio: "Web Developer and Tech Enthusiast",
    profilePic: "https://via.placeholder.com/100",
  };

  return (
    <div className="user-profile">
      <img src={user.profilePic} alt="Profile" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserProfile;
