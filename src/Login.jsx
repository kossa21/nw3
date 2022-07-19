import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clickHandler = () => {};

  return (
    <>
      <h1>Sign in</h1>
      <div>
        <input
          type="text"
          name="email"
          id=""
          placeholder="email"
          onChange={(event) => {
            setEmail(event.target.value);
            console.log(email);
          }}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="enter password"
          onChange={(event) => {
            setPassword(event.target.value);
            console.log(password);
          }}
        />

        <button onClick={clickHandler}>Login</button>
      </div>
    </>
  );
};

export default Login;
