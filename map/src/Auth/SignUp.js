import React,{useState} from "react";

const SignUp = props => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const handleChange = e => {
    e.presist();
    setInput(input => ({
      ...input,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          name="name"
          label="Password"
          placeholder="name"
          value={input.name}
          onchange={handleChange}
        />
        <input
          id="email"
          type="text"
          label="Email"
          name="email"
          placeholder="email"
          value={input.email}
          onchange={handleChange}
        />
        <input
          id="password"
          type="password"
          label="Password"
          name="password"
          placeholder="password"
          value={input.password}
          onchange={handleChange}
        />
        <input
          id="password2"
          name="password2"
          type="password"
          label="Conform password"
          placeholder="confirm password"
          value={input.password2}
          onchange={handleChange}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default SignUp;
