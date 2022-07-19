import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome!</h1>

      <div>
        <a href="login">
          <button>Login</button>
        </a>
        <a href="signup">
          <button>Sign up</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
