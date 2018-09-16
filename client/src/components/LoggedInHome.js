import React from 'react';

const LoggedInHome = () => {

  const userName = localStorage.getItem("username");

  return (
    <div>
      <h2>Hi {userName}</h2>
    </div>
    )
  }

export default LoggedInHome;
