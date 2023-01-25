import {Link, useNavigate} from "react-router-dom"
import React, { useContext }  from "react"
import { AuthContext } from "../Context/AuthContext";
function Login() {
  const [user,setUser]=React.useState({email:"",password:""})
  const navigate = useNavigate();
  const Auth = useContext(AuthContext);

 const handelchange=(e)=>{
const {value,name}=e.target
setUser({...user,[name]:value})
}
const handelsubmit=()=>{
  event.preventDefault()
  fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((res) => {
  

      Auth.loginUser(res.token);
navigate("/dashboard")
     return res.token
    })
    .catch((err) => {
    
      alert("something went wrong")
    });

}
  return (
    <div>
      <form data-testid="login-form" onSubmit={handelsubmit}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" name="email" onChange={handelchange}
            value={user.email}
       
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              name="password"
              value={user.password}
              onChange={handelchange}
       
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
