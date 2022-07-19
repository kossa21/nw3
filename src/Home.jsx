import React from 'react';

const Home = () => {
  return (
    <>
      <h1>Welcome!</h1>

      <div>
        <a href="login">
          <button>Login</button>
        </a>
        <a href="signup">
          <button>Sign up</button>
        </a>
      </div>
    </>
  );
};

export default Home;
