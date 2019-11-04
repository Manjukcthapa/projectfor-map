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
      }
      
      
      ));
}

const handleSubmit = e => {
    e.preventdefault();
    

}

    return(
        <div>
            <form onSubmit={handleSubmit}>
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
            </form>
        </div>
    )
}

export default LogIn
