import React from "react";

const SignUp = props => {
  return (
    <div>
      <form>
        <input
          id="name"
          type="text"
          name="name"
          label="Password"
          placeholder="name"
        />
        <input
          id="email"
          type="text"
          label="Email"
          name="email"
          placeholder="email"
        />
        <input
          id="password"
          type="password"
          label="Password"
          name="password"
          placeholder="password"
        />
        <input
          id="password2"
          name="password2"
          type="password"
          label="Conform password"
          placeholder="password"
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default SignUp;
