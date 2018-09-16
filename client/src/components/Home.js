import React from 'react';
import JumbotronHome from './JumbotronHome';
import LoggedInHome from './LoggedInHome';

const Home = () => {

  const loggedIn = !!localStorage.getItem("token")

  return (
    <div>
      {loggedIn ? <LoggedInHome /> : <JumbotronHome />}
    </div>
    )
  }

export default Home;
