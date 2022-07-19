import React from 'react';

const SignUp = () => {
  return (
    <>
      <h1>Sign Up</h1>

      <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="" placeholder="name" />

        <label for="email">Email</label>
        <input type="text" name="email" id="" placeholder="email" />

        <label for="password">Password</label>
        <input type="password" name="password" id="" placeholder="password" />

        <button>Sign Up</button>
      </div>
    </>
  );
};

export default SignUp;
