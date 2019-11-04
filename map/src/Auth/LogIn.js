import React from "react";

const LogIn  = props => {
const[input, setInput] = useState({
    email:'',
    password:''
})

const handleChange = e =>{
    e.presist();
    setInput(input => ({
        ...input,
        [e.target.id]: e.target.value
      }));
}

    return(
        <div>
            <input
              id="email"
              type="text"
              label="Email"
              name="email"
              placeholder="email"
              value={input.email}
              onchange={handleChange}/>
            <input
              id="password"
              type="password"
              label="password"
              name="password"
              placeholder="password"
              value={input.password}
              onchange={handleChange}/>
            <button>Sign In</button>
        </div>
    )
}

export default LogIn
